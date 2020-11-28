import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/welcomeScreen'
import Santa from './components/Santa'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Santa></Santa>
       <WelcomeScreen></WelcomeScreen>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
