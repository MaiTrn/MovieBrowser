import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class SettingsScreen extends React.Component {
    state = {
      dark: false,
    }

    toggleDarkMode = () => {
      this.setState({
        dark: !this.state.dark,
      })
    }


    render() {
      return (
        <View style={styles.container}>
            <View style={styles.settingsContainer}>
                <Text style={styles.textColor}>Dark Mode</Text>
                <View style={styles.switchAlign}>
                  <Switch value={this.state.dark} onValueChange={this.toggleDarkMode}/>
                </View>
            </View>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }] 
                })
              }}>
                <Text style={styles.textColor}>Logout</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
    }
  }
  
function SettingsTab() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{
          headerTitle: 'Settings',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#E96F6F',
            height: 90,
          }
      }} />
      </Stack.Navigator>
    )
  }

export default SettingsTab


const styles = StyleSheet.create({
    settingsContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        marginLeft: 10,
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

    switchAlign: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },

    container: {
      flex: 1,
      backgroundColor: '#36363A',
      paddingTop: Constants.statusBarHeight,
    },
  
    inputBar: {
      minWidth: 280,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 2,
      padding: 5,
      color: 'white',
    },

    buttonContainer: {
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      opacity: .6,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 5,
      backgroundColor:'#C94A4A', 
      width: 70,
      height: 30,
      borderRadius: 2,
    },
  
    textColor: {
      color: 'white',
      fontSize: 15,
    }
  });
  