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
        marginTop: 20
    }
})

const Fields = (props) => {
    
  return (
    <View style={styles.container}>
        <Field name="Name" input={props.name} setInput={props.setName} icon={<FontAwesome name="user" size={24} color="black" />}/>
        <Field name="Phone" input={props.phone} setInput={props.setPhone} icon={<FontAwesome name="phone" size={24} color="black" />} />
        <Field name="Address" input={props.address} setInput={props.setAdress} icon={<Ionicons name="location" size={24} color="black" />}/>                
        <Field name="Additional Notes" input={props.notes} setInput={props.setNotes} numLines={4} icon={<MaterialIcons name="speaker-notes" size={24} color="black" />}/>      
        <Field name="Birthday" input={props.birthday} setInput={props.setBirthday} fieldType="date" icon={<FontAwesome name="birthday-cake" size={24} color="black" />}/>
    </View>
  )
}

export default Fields