import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const FriendItem = ({friendName}) => {
    const printFriend = () => {
        console.log(friendName)
    }
    return (
    <TouchableOpacity onPress={printFriend}>
        <View style={styles.container}>        
        <View style={styles.imageContainer}>
            <AntDesign name="user" size={24} color="white"/>
        </View>
        <Text style={styles.name}>{friendName}</Text>

        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#7A6DA5",
        marginVertical: 5,
        paddingVertical: 5,
        borderRadius: 10,
    
    },
    imageContainer: {
        backgroundColor: "#3E3364",
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 10
    },
    name: {
        fontSize: 20,
        marginLeft: 10,

    }
})

export default FriendItem