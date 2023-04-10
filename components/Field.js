import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PickDate from './PickDate';

const renderFieldType = (fieldType, name, numLines) => {
    const [datePickerOn, setDatePicker] = useState(false)

    const turnDatePickerOn = () =>{
        setDatePicker(true)
    }


    if (fieldType === "date") {        
        return <>
            <PickDate style={styles.pickDateButton} datePickerOn={datePickerOn} turnDatePickerOn={turnDatePickerOn}/>            
        </>
    }
    else {
        return <TextInput 
        placeholder={name} 
        style={styles.textInput} 
        multiline
        numberOfLines={numLines}/>
    }
}

const Field = ({name, icon, numLines, fieldType}) => {
  return (
    <View style={styles.container}>    
      <View style={{width: 30}}>
        {icon}
      </View>
      {renderFieldType(fieldType, name)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",        
        paddingHorizontal: 5,
        marginVertical: 5     
    },
    textInput: {
        borderWidth: 1, 
        paddingVertical: 2,
        borderRadius: 5,
        paddingHorizontal: 10,    
        flex: 1,
        height: 50
    },
})

export default Field