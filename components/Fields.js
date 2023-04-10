import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Field from './Field';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 50
    }
})

const Fields = () => {
    
  return (
    <View style={styles.container}>
        <Field name="Name"  icon={<FontAwesome name="user" size={24} color="black" />}/>
        <Field name="Phone" icon={<FontAwesome name="phone" size={24} color="black" />} />
        <Field name="Address" icon={<Ionicons name="location" size={24} color="black" />}/>                
        <Field name="Additional Notes" numLines={4} icon={<MaterialIcons name="speaker-notes" size={24} color="black" />}/>      
        <Field name="Birthday" fieldType="date" icon={<FontAwesome name="birthday-cake" size={24} color="black" />}/>
    </View>
  )
}

export default Fields