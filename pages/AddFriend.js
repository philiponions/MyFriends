import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'

const AddFriend = ({setFriendList, friendList}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [notes, setNotes] = useState("")
    const [birthday, setBirthday] = useState(new Date());    

    const toast = () => {        
        Toast.show({
            type: 'success',
            text1: 'Friend added!'
          });
    }


    const addFriend = async () => {
        const value = {
            name: name,
            phone: phone,
            notes: notes,
            birthday: birthday
        }

        
        try {
            toast()
            setFriendList([...friendList, value])            
            
            const jsonValue = JSON.stringify([...friendList, value])
            
            // await AsyncStorage.clear();
            await AsyncStorage.setItem('friendList', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <SafeAreaView style={{flex: 1}}>        
        <View style={styles.container}>
            <Text style={styles.heading}>Add a Friend</Text>
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
        <Toast
        position='top'
        
      />
    </SafeAreaView>    
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
    bottom: {
        position: 'absolute',
        bottom:0,
        flexDirection: "row"
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