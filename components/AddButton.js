import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const AddButton = ({goToAddFriend}) => {
    
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={goToAddFriend}>            
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center"
    },
    button: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 10,
      backgroundColor: "#2FCEDF",
      borderRadius: 100,
      padding: 20
    },
  });

export default AddButton