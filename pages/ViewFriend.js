import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'
import { AntDesign } from '@expo/vector-icons';
import DetailContainer from '../components/DetailContainer';

const ViewFriend = ({setFriendList, friendList, selectedFriend}) => {
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
            <View style={styles.header}>
                <View style={styles.circle}>
                    <AntDesign name="user" size={60} color="black"/>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.name}>{selectedFriend.name}</Text>
                    <TouchableOpacity>
                        <Button title="Edit Profile"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.info}>                
                { selectedFriend.phone ? <DetailContainer detail={selectedFriend.phone}/> : null}
                { selectedFriend.address ? <DetailContainer detail={selectedFriend.address}/>: null}
                { selectedFriend.notes ? <DetailContainer detail={selectedFriend.notes}/>: null}
                { selectedFriend.birthday ? <DetailContainer detail={selectedFriend.birthday.split('T')[0]}/> : null}
            </View>            
        </View>        
                    
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
    container: {        
        marginBottom: 100
    },
    header: {        
        alignItems: "center",
        marginTop: 50,
        flexDirection: "row",
        padding: 20
    },
    detail: {
        fontSize: 24
    },
    name: {
        fontSize: 40,
        fontWeight: 600,    
    },
    info: {
        marginLeft: 20,
        marginTop: 100
    },
    circle: {
        borderRadius: 100,
        backgroundColor: "#ffffff",
        borderWidth: 3
    },
    heading: {
        marginLeft: 10         
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

export default ViewFriend