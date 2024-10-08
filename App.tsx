import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TabNavigation from './navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}