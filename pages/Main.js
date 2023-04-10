import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from '../components/List';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Main({friendList}) {    
    const navigation = useNavigation()

    const goToAddFriend = () => {
        navigation.navigate('AddFriend')        
    }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>My Friends</Text>
        {
            friendList.length ? <List friendList={friendList}/> : <Text>you have no friends</Text>
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
  button: {    
    bottom: 100,
    alignSelf: "flex-end"
  }


});
