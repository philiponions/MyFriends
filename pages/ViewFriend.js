import { View, Text, SafeAreaView, StyleSheet, Image, Button, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import { AntDesign } from '@expo/vector-icons';
import DetailContainer from '../components/DetailContainer';
import InfoView from '../components/InfoView';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ViewFriend = ({editTrigger, setEditTrigger, setFriendList, friendList, selectedFriend}) => {    
    const [name, setName] = useState(selectedFriend.name)
    const [phone, setPhone] = useState(selectedFriend.phone)
    const [address, setAddress] = useState(selectedFriend.address)
    const [notes, setNotes] = useState(selectedFriend.notes)
    const [picture, setPicture] = useState(selectedFriend.picture)
    const [birthday, setBirthday] = useState(new Date(selectedFriend.birthday.split("T")[0]));       
    const friendObj = friendList.find(x => x.id === id)
    const id = selectedFriend.id // We don't need to modify id    
    const navigation = useNavigation()
    const didMount = useRef(false)

    useEffect(() => {        
        if (!didMount.current) {
            console.log("not mount")
            didMount.current = true
        }
        else {
            try{
                console.log(friendObj)
                const newFriendObj = friendList.find(x => x.id === id)
                setPhone(newFriendObj.phone)
                setAddress(newFriendObj.address)
                setNotes(newFriendObj.notes)
                setBirthday(new Date(newFriendObj.birthday.split("T")[0]))
                setPicture(newFriendObj.picture)
                // setAd(newFriendObj.phone)
                // console.log(newFriendObj)
            } catch (e) {
                console.log(e)
            }
        }  
    }, [editTrigger])

    const goToEdit = () => {
        navigation.navigate('EditFriend')        
    }
  
  return (
    // <SafeAreaView style={{flex: 1}}>        
        <View
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.header}>                    
                        <View style={styles.profileContainer}>
                            <View style={styles.imageContainer}>
                                <View style={styles.avatar}>
                                    {picture ? <Image source={{ uri: picture }} style={{ width: 100, height: 100 }} /> : <AntDesign name="user" size={90} color="black"></AntDesign>}</View>
                                <View>            
                            </View>    
                        </View>
                    </View>
                        <TouchableOpacity onPress={goToEdit}>
                            <View style={styles.editButton}>
                                <Text style={styles.editText}>Edit Profile</Text>
                            </View>
                        </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                </View>
                    <View style={styles.content}>
                        <InfoView info={phone} infoType="Phone" setInfo={setPhone}></InfoView>
                        <InfoView info={address} infoType="Address" setInfo={setAddress}></InfoView>
                        <InfoView info={birthday} infoType="Birthday" setInfo={setBirthday}></InfoView>               
                        <InfoView info={notes} numLines={4} infoType="Notes" setInfo={setNotes}></InfoView>                
                    </View>
            </View>                            
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
        backgroundColor: "#34d15e",
        borderRadius: 5,
        padding: 5,
        marginTop: 5
    },
    editText: {
        color: "#ffffff"
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