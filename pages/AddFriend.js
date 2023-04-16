import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Image, useWindowDimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import uuid from 'react-native-uuid';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

const AddFriend = ({setFriendList, friendList}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [notes, setNotes] = useState("")
    const [birthday, setBirthday] = useState(new Date());        
    const [picture, setPicture] = useState(null)
    const windowHeight = useWindowDimensions().height;

    const toastSuccess = () => {        
        Toast.show({
            type: 'success',
            text1: 'Friend added!'
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
    

    const toastFail = () => {        
        Toast.show({
            type: 'error',
            text1: 'You gotta give a name!'
          });
    }

    const addFriend = async () => {
        const value = {
            id: uuid.v4(),
            name: name,
            phone: phone,
            address: address,
            notes: notes,
            birthday: birthday.toISOString(),
            picture: picture
        }   

        if (name.length > 0) {
            
            try {
                toastSuccess()
                const newList = [...friendList, value]
                setFriendList(newList)            
                
                const jsonValue = JSON.stringify(newList)
                // await AsyncStorage.clear();
                await AsyncStorage.setItem('friendList', jsonValue)
            } catch (e) {
                console.log(e)
            }
        }
        else {
            toastFail()
        }
    }

  return (
    <View style={{minHeight: Math.round(windowHeight)}}>
            <View style={styles.container}>
                <Text style={styles.heading}>Add a Friend</Text>
            </View>    
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
                <Fields 
                    style={styles.fields}            
                    name={name} setName={setName}
                    phone={phone} setPhone={setPhone}
                    address={address} setAdress={setAdress}
                    notes={notes} setNotes={setNotes}
                    birthday={birthday} setBirthday={setBirthday}
                />
        
        
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.buttonContainer} onPress={addFriend}>
                <Text style={{color: "white"}}>Add Friend</Text>
            </TouchableOpacity>        
        </View>
        <Toast position='top'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,        

    },
    heading: {
        alignItems: "center",
        fontSize: 40,
        fontWeight: 600,        
    },    
    profileHeader: {
        alignItems: "center",
        marginTop: 20
    },
    bottom: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row"
    },
    imageContainer: {
        alignItems: "center",        
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
    buttonContainer: {
        backgroundColor: "#59ABCC",
        alignItems: "center",
        paddingVertical: 30,
        marginHorizontal: 10,
        borderRadius: 10,                
        marginBottom: 20,
        flexGrow: 1       
    },
})

export default AddFriend