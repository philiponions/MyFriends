import { View, Text, SafeAreaView, StyleSheet, Image, Button, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import { AntDesign } from '@expo/vector-icons';
import DetailContainer from '../components/DetailContainer';
import InfoView from '../components/InfoView';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

const ViewFriend = ({setFriendList, friendList, selectedFriend}) => {    
    const [name, setName] = useState(selectedFriend.name)
    const [phone, setPhone] = useState(selectedFriend.phone)
    const [address, setAdress] = useState(selectedFriend.address)
    const [notes, setNotes] = useState(selectedFriend.notes)
    const [picture, setPicture] = useState(selectedFriend.picture)
    const [birthday, setBirthday] = useState(new Date(selectedFriend.birthday.split("T")[0]));   
    const id = selectedFriend.id // We don't need to modify id    

    const toast = () => {        
        Toast.show({
            type: 'success',
            text1: 'Edit saved!'
          });
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });            
    
        if (!result.canceled) {   
            // If user did pick an image change picture state         
          setPicture(result.assets[0].uri);
        }
      };
    
    
    const saveFriend = async () => {        
        const value = {
            name: name,
            phone: phone,
            address: address,
            notes: notes,
            birthday: birthday.toISOString(),
            picture: picture,
        }        
        // console.log("payload:", value)
        const updatedList = friendList.map((friend) => {
            if (friend.id === id) {
                return value
            }
            return friend
        })
        console.log(updatedList)
        try {
            toast()
            console.log(friendList.findIndex((friend) => friend.id === selectedFriend.id))

            setFriendList(updatedList)            
            
            const jsonValue = JSON.stringify(updatedList)
            
            // await AsyncStorage.clear();
            await AsyncStorage.setItem('friendList', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }
  return (
    // <SafeAreaView style={{flex: 1}}>        
        <View
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.header}>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileContainer}>

                            <View style={styles.imageContainer}>
                                <View style={styles.avatar}>
                                    {picture ? <Image source={{ uri: picture }} style={{ width: 100, height: 100 }} /> : <AntDesign name="user" size={90} color="black"></AntDesign>}</View>
                                <View>            
                            </View>
                            </View>
                            <TouchableOpacity onPress={pickImage} style={styles.editButton}>                                
                                    <FontAwesome name="pencil" size={20} color="white" />                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.name}>{name}</Text>
                </View>
                    <View style={styles.content}>
                        <InfoView info={phone} infoType="Phone" setInfo={setPhone}></InfoView>
                        <InfoView info={address} infoType="Address" setInfo={setAdress}></InfoView>
                        <InfoView info={birthday} infoType="Birthday" setInfo={setBirthday}></InfoView>               
                        <InfoView info={notes} numLines={4} infoType="Notes" setInfo={setNotes}></InfoView>                
                    </View>
            </View>                            
        <TouchableOpacity style={styles.saveButton} onPress={saveFriend}>
            <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <Toast position='top'/>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,        
        alignItems: "center",
        backgroundColor: "#03cffc"
    },
    content: {
        padding: 20
    },
    inner: {
        justifyContent: "flex-end"
    },
    infoLabel: {
        fontSize: 17,
        fontWeight: 500
    },
    container: {
        flex: 1
    },
    saveText: {
        color: "#ffffff",
        fontSize: 24
    },  
    saveButton: {
        alignItems: "center",
        backgroundColor: "#34d15e",
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 5
    },
    block: {
        marginBottom: 30,
        backgroundColor: "#ffffff",
        elevation: 5,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    editButton: {
        backgroundColor: "#1ae87a",
        borderRadius: 100,                
        width: 30,
        height: 30, 
        borderWidth: 2,   
        borderColor: "#ffff",           
        alignItems: "center",
        justifyContent: "center",   
        bottom: 0,
        right: 0,
        position:"absolute",
    },
    profileContainer: {                
        justifyContent: "center",
        alignItems: "center",
        // // width: "auto"
        maxWidth: 100        
    },
    avatar: {
        backgroundColor: "#ffffff",
        borderRadius: 100,        
        maxHeight: 100,
        maxWidth: 100,
        minHeight: 100,
        minWidth: 100,
        overflow: 'hidden',
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 24,
        fontWeight: 500,
        color: "#ffffff",
        marginTop: 10
    },
    notes: {
        paddingBottom: 50
    }
})

export default ViewFriend