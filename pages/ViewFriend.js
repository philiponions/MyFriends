import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import { AntDesign } from '@expo/vector-icons';
import DetailContainer from '../components/DetailContainer';
import InfoView from '../components/InfoView';

const ViewFriend = ({setFriendList, friendList, selectedFriend}) => {    
    const [name, setName] = useState(selectedFriend.name)
    const [phone, setPhone] = useState(selectedFriend.phone)
    const [address, setAdress] = useState(selectedFriend.address)
    const [notes, setNotes] = useState(selectedFriend.notes)
    const [birthday, setBirthday] = useState(new Date(selectedFriend.birthday.split("T")[0]));   
    const id = selectedFriend.id // We don't need to modify id    

    const toast = () => {        
        Toast.show({
            type: 'success',
            text1: 'Friend added!'
          });
    }
    
    const saveFriend = async () => {        
        const value = {
            name: name,
            phone: phone,
            notes: notes,
            birthday: birthday
        }        
        console.log("payload:", value)
        const updatedList = friendList.map((friend) => {
            if (friend.id === id) {
                return value
            }
            return friend
        })
        console.log(updatedList)
        // try {
        //     toast()
        //     console.log(friendList.findIndex((friend) => friend.id === selectedFriend.id))

        //     setFriendList([...friendList, value])            
            
        //     const jsonValue = JSON.stringify([...friendList, value])
            
        //     // await AsyncStorage.clear();
        //     await AsyncStorage.setItem('friendList', jsonValue)
        // } catch (e) {
        //     console.log(e)
        // }
    }
  return (
    // <SafeAreaView style={{flex: 1}}>        
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <AntDesign name="user" size={80} color="black"></AntDesign>
                    </View>
                    <Text style={styles.name}>{name}</Text>
                </View>
                    <View style={styles.content}>
                        <InfoView info={phone} infoType="Phone" setInfo={setPhone}></InfoView>
                        <InfoView info={address} infoType="Address" setInfo={setAdress}></InfoView>
                        <InfoView info={birthday} infoType="Birthday" setInfo={setBirthday}></InfoView>               
                        <InfoView info={notes} infoType="Notes" setInfo={setNotes}></InfoView>                
                    </View>
            </View>                            
        <TouchableOpacity style={styles.saveButton} onPress={saveFriend}>
            <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
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
    avatar: {
        backgroundColor: "#ffffff",
        borderRadius: 100,
        borderWidth: 5,
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