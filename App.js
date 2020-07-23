import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LoginScreen } from './Verification'
import HomeScreen from './Home'
import SettingsScreen from './Settings'

//defind Stack and Tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//NAVIGATORS
function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#E96F6F',
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 12,
          marginBottom: 5,
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'Settings')
            iconName = focused ? 'settings' : 'settings-outline';
          return <Icon name={iconName} size = {25} color={ color }/>
        },
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

class LoginNavigator extends React.Component {
  render() {
    return (
      <LoginScreen onPress={() => this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
      })}/>
      )
  }
}

/*function AppNavigator() {
  return (

  )
}
*/
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginNavigator} options={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#E96F6F',
          height: 90,
        }
      }} />
      <Stack.Screen name="Main" component={TabNavigator} options={{
          headerShown: false,
          headerLeft: null,
      }} />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36363A',
    paddingTop: Constants.statusBarHeight,
  },

});
