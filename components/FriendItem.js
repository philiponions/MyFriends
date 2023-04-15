import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const FriendItem = ({createDeleteAlert, friendObj, goToViewFriend, setSelectedFriend}) => {
    const goToNewPage = () => {
        goToViewFriend()
        setSelectedFriend(friendObj)
        
    }
    return (
    <TouchableOpacity onPress={goToNewPage} onLongPress={() => createDeleteAlert(friendObj.id)}>
        <View style={styles.container}>        
        <View style={styles.imageContainer}>
            <AntDesign name="user" size={24} color="white"/>
        </View>
        <Text style={styles.name}>{friendObj.name}</Text>

        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#ffff",
        marginVertical: 5,
        paddingVertical: 5,
        borderRadius: 3,        
        elevation: 5,
    
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