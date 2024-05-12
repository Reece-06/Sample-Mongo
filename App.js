import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default StackNavigator