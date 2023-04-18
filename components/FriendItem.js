import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
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
            {friendObj.picture ? <Image source={{ uri: friendObj.picture }} style={{ width: 60, height: 60 }} /> : <AntDesign name="user" size={60} color="black"></AntDesign>}          
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
        backgroundColor: "#ffffff",
        borderRadius: 100,        
        marginLeft: 10,        
        overflow: 'hidden',
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 20,
        marginLeft: 10,

    }
})

export default FriendItem