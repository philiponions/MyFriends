import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const PickDate = ({datePickerOn, setDatePicker, turnDatePickerOn, date, setDate}) => {
//   const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [firstClick, setFirstClick] = useState(true)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    currentDate.setDate(currentDate.getDate()); // Not sure why but date is always one day off.
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
    setFirstClick(false)
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true)
  };

  return (    
    <TouchableOpacity style={styles.container} onPress={showDatepicker}>
        <View style={styles.container}>
            <Text>{firstClick ? "Birthday" : date.toISOString().split('T')[0]}</Text>
            <MaterialIcons name="date-range" size={24} color="black" onChange={onChange}/>            
        </View>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: 'space-between',
        paddingVertical: 2,
        borderRadius: 5,
        paddingHorizontal: 10,    
        flex: 1,
        height: 50,
        backgroundColor: "#D5D5D5"
    }
})

export default PickDate