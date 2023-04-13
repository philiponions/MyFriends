import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import List from '../components/List';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import EmptyHeader from '../components/EmptyHeader';


export default function Main({friendList, setFriendList, selectedFriend, setSelectedFriend}) {    
    const navigation = useNavigation()

    const goToAddFriend = () => {
        navigation.navigate('AddFriend')          
    }

    const goToViewFriend = () => {
        navigation.navigate('ViewFriend')          
    }

    const createDeleteAlert = (id) =>
    Alert.alert('Warning', 'Are you sure you want to delete this person?', [
      {
        text: 'Cancel',
        onPress: () => console.log("cancel"),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => setFriendList(friendList.filter((item) => item.id !== id))},
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
    fontSize: 50,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },
});
