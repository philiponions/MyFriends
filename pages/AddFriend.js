import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Fields from '../components/Fields'


const AddFriend = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [notes, setNotes] = useState("")
    const [birthday, setBirthday] = useState(new Date());    

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
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color: "white"}}>Add Friend</Text>
            </TouchableOpacity>        
        </View>
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