import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    console.log(username, password);
  }
  function handleChangeUsername(value: string) {
    setUsername(value);
  }
  function handleChangePassword(value: string) {
    setPassword(value);
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter your username' value={username} onChangeText={handleChangeUsername}/>
      <TextInput placeholder='Enter your password' value={password} onChangeText={handleChangePassword}/>
      <Button title="Click me" onPress={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
