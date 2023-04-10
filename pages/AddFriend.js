import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const AddFriend = () => {
  return (    
    <SafeAreaView>
        <View styles={styles.container}>
            <Text style={styles.heading}>Add a Friend</Text>
        </View>
    </SafeAreaView>        
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1
    },
    innerContainer: {
        flex: 1
    },
    heading: {
        alignItems: "center",
        fontSize: 30,
        fontWeight: 600
    }
})

export default AddFriend