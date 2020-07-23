import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }

  login = () => {
    if (this.state.username === 'admin' && this.state.password === 'root') {
      this.props.onPress()
      this.setState({
        username: '',
        password: '',
        error: '',
      })
    }
    else {
      this.setState({
        error: 'Wrong username or password! Try again'
      })
    }
  }

  handleUsername = username => {
    this.setState({
      username: username,
      error: '',
    })
  }
  handlePassword = password => {
    this.setState({
      password: password,
      error: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={[styles.inputBar, styles.alignLogin]}
          onChangeText ={this.handleUsername}
          value={this.state.username}
          placeholder="Username"
          autoCapitalize="none"/>
        <TextInput style={[styles.inputBar, styles.alignLogin]}
          onChangeText={this.handlePassword}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry/>
        <View style={styles.error}>
          <Text style={{color: 'red'}}>{this.state.error}</Text>
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.textColor}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text style={styles.textColor}>Don't have an account? Sign up now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text style={styles.textColor}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export { LoginScreen }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36363A',
    },
  
    alignLogin: {
      marginBottom: 5,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  
    loginBtn: {
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputBar: {
      minWidth: 280,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 2,
      padding: 5,
      color: 'white',
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
    },

    error: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
    }
  });
  
