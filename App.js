import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import AddFriend from './pages/AddFriend';
import ViewFriend from './pages/ViewFriend';
import EditFriend from './pages/EditFriend';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [friendList, setFriendList] = useState([])    
  const [selectedFriend, setSelectedFriend] = useState({})
  const [editTrigger, setEditTrigger] = useState(false)

  const goToAddFriend = () => {
      navigation.navigate('AddFriend')      
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('friendList')      
      setFriendList(jsonValue != null ? JSON.parse(jsonValue) : [])
    } catch(e) {
      console.log(e)
    }        
  }
  useEffect(() => {
    getData()
  }, [])  

  return (    
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"            
            options={{ headerShown: false }}>
            {(props) => <Main friendList={friendList} 
                              setFriendList={setFriendList}
                              selectedFriend={selectedFriend} 
                              setSelectedFriend={setSelectedFriend} 
                              goToAddFriend={goToAddFriend}/>}
          </Stack.Screen>
          <Stack.Screen
            name="AddFriend"            
            options={{ headerShown: false }}>
            {(props) => <AddFriend friendList={friendList} 
                                    setFriendList={setFriendList}/>}
          </Stack.Screen>
          <Stack.Screen
            name="ViewFriend"                    
            options={{ headerShown: false }}>
             {(props) => <ViewFriend selectedFriend={selectedFriend} 
                                     setSelectedFriend={setSelectedFriend}
                                     friendList={friendList}
                                     setFriendList={setFriendList}
                                     editTrigger={editTrigger}
                                     setEditTrigger={setEditTrigger}
                                     />}
                                    
          </Stack.Screen>
          <Stack.Screen
            name="EditFriend"                    
            options={{ headerShown: false }}>
             {(props) => <EditFriend selectedFriend={selectedFriend} 
                                     setSelectedFriend={setSelectedFriend}
                                     friendList={friendList}
                                     setFriendList={setFriendList}
                                     editTrigger={editTrigger}
                                     setEditTrigger={setEditTrigger}
                                     />}
                                    
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>    
    </SafeAreaProvider>
  );
}

