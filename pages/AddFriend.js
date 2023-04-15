import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker';

const AddFriend = ({setFriendList, friendList}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [notes, setNotes] = useState("")
    const [birthday, setBirthday] = useState(new Date());    

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
    
        console.log("Check this out:");
        console.log(result.uri);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
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
            birthday: birthday.toISOString()
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
    <SafeAreaView style={{flex: 1}}>        
        <View style={styles.container}>
            <Text style={styles.heading}>Add a Friend</Text>
        </View>        
            <TouchableOpacity onPress={pickImage}>
                <View>
                    <Text>picture</Text>
                </View>
            </TouchableOpacity>
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