import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Fields from '../components/Fields'


const AddFriend = () => {    

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>Add a Friend</Text>
        </View>
        <Fields style={styles.fields}/>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50
    },
    heading: {
        alignItems: "center",
        fontSize: 40,
        fontWeight: 600,        
    },    
})

export default AddFriend