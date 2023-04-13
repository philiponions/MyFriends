import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const InfoView = ({infoType, info, setInfo}) => {
  const [toggleEdit, setToggleEdit] = useState(false)  
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false); 
//   const [text, setText] = useState("") 

  const changeText = (v) => {
    setInfo(v)
    // console.log(info)
  }
  
  const edit = () => {
    setToggleEdit(!toggleEdit)
    if (infoType === "Birthday") {
        showDatepicker()
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setInfo(currentDate);
    console.log("change")
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true)
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);    
  };

  const renderField = () => {
    if (infoType === "Birthday") {
        return <>
            <Text>{info ? info.toISOString().split("T")[0] : "N/A"}</Text>
            {
                show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={info}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />      )    
            }
        </>        
    }
    else {
        return <TextInput value={info} onChangeText={v=> {setInfo(v)}}  style={styles.textInput}/> // why is this not working
    }
  }

  // DO NOT RENDER renderField AS A COMPONENT OTHERWISE ONCHANGETEXT WILL BE UNMOUNTED
  return (
        <TouchableOpacity style={styles.block} onPress={edit}>
            <View style={infoType !== "Notes" ? styles.infoContainer: [styles.infoContainer, styles.notes]}>
                <Text style={styles.infoLabel}>{infoType}</Text>                            
                {renderField()}         
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