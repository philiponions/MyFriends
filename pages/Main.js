import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import List from '../components/List';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import EmptyHeader from '../components/EmptyHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


export default function Main({friendList, setFriendList, selectedFriend, setSelectedFriend}) {    
    const navigation = useNavigation()

    const deleteToast = () => {        
      Toast.show({
          type: 'success',
          text1: 'Friend Deleted'
        });
    }

    const goToAddFriend = () => {
        navigation.navigate('AddFriend')          
    }

    const goToViewFriend = () => {
        navigation.navigate('ViewFriend')          
    }

    const handleDelete = async (id) => {
      try {
          const newList = friendList.filter((item) => item.id !== id)  
          setFriendList(newList)
          
          const jsonValue = JSON.stringify(newList)
          // await AsyncStorage.clear();
          await AsyncStorage.setItem('friendList', jsonValue)
          deleteToast()
      } catch (e) {
          console.log(e)
      }
    }

    const createDeleteAlert = (id) =>
    Alert.alert('Warning', 'Are you sure you want to delete this person?', [
      {
        text: 'Cancel',
        onPress: () => console.log("cancel"),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleDelete(id)},
    ]);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>My Friends</Text>
        {
            friendList.length ? <List friendList={friendList} 
                                      createDeleteAlert={createDeleteAlert}
                                      goToViewFriend={goToViewFriend} 
                                      selectedFriend={selectedFriend}
                                      setSelectedFriend={setSelectedFriend}/> : <EmptyHeader/>
        }
        <AddButton style={styles.button} goToAddFriend={goToAddFriend}/>
        <Toast position='top'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    marginTop: 30     
  },
  title: {
    fontSize: 30,
    fontWeight: '40',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    alignSelf: "center"
  },
});
