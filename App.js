import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import AddFriend from './pages/AddFriend';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddFriend"
            component={AddFriend}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',        
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
