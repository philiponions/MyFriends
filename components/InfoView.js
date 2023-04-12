import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const InfoView = ({infoType, info}) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  return (
        <TouchableOpacity style={styles.block} onPress={() => setToggleEdit(!toggleEdit)}>
            <View style={infoType !== "Notes" ? styles.infoContainer: [styles.infoContainer, styles.notes]}>
                <Text style={styles.infoLabel}>{infoType}</Text>            
                <TextInput defaultValue={info ? info : "N/A"} style={styles.textInput}/>
            </View>                    
                <AntDesign name="edit" size={24} color="black"/>                    
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    infoLabel: {
        fontSize: 17,
        fontWeight: 500
    },
    
    block: {
        marginBottom: 30,
        backgroundColor: "#ffffff",
        elevation: 5,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // maxHeight: 60
    },
    notes: {
        paddingBottom: 50
    }
})

export default InfoView