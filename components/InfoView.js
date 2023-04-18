import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


const InfoView = ({infoType, info, setInfo, numLines}) => {
  const [toggleEdit, setToggleEdit] = useState(false)  
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false); 
//   const [text, setText] = useState("") 

  const changeText = (v) => {
    setInfo(v)
    // console.log(info)
  }
  
  const edit = async () => {
    try {
      // console.log(info)
      if (infoType === "Birthday") {
        // console.log(info.toISOString().split("T")[0])
        await Clipboard.setStringAsync(info.toISOString().split("T")[0]);
        // info = info.toISOString.split("T")[0] 
      }
      else {await Clipboard.setStringAsync(info);}
    }
    catch (e) {
      console.log(e)
    }
    // setToggleEdit(!toggleEdit)
    // if (infoType === "Birthday") {
    //     showDatepicker()
    // }
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
        return <Text>{info ? info.toISOString().split("T")[0] : "N/A"}</Text>        
    }
    else {
        return <Text>{info}</Text>
    }
  }

  // DO NOT RENDER renderField AS A COMPONENT OTHERWISE ONCHANGETEXT WILL BE UNMOUNTED
  return (
        <TouchableOpacity style={styles.block} onPress={edit}>
            <View style={infoType !== "Notes" ? styles.infoContainer: [styles.infoContainer, styles.notes]}>
                <View>
                  <Text style={styles.infoLabel}>{infoType}</Text>                                            
                  {renderField()}         
                </View>
                <Feather name="clipboard" size={24} color="black" />
            </View>                                    
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    infoLabel: {
        fontSize: 17,
        fontWeight: 500
    },
    infoContainer: {
      flexDirection: "row",
      alignItems: "center",      
      justifyContent: "space-between",
      flex: 1      
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
        minHeight: 60
    },
    // notes: {
    //     paddingBottom: 50
    // }
})

export default InfoView