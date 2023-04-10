import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import AddButton from './components/AddButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Friends</Text>
      <List/>      
      <AddButton style={styles.button}/>
    </View>
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
