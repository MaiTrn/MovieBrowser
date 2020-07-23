import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { searchMovie } from './API.js'

const Stack = createStackNavigator();

class HomeScreen extends React.Component {
    state = {
      text: '',
      validSearch: false,
      movieList: {
        title: '',
        year: '',
        plot: '',
        genre: '',
        director: '',
        actors: '',
      },
      isResultShown: false,
    }
  
    componentDidUpdate(prevProps, prevState) {
          if (this.state.text !== prevState.text)
              this.validateSearch()
    }

  
    handleSearch = text => {
      if (this.state.text.length <= 50) {
        this.setState({
          text: text
        })
      }
    }
  
    validateSearch = () => {
      if (this.state.text.length >= 3)
      {
        this.setState({validSearch: true})
      }
      else this.setState({validSearch: false})
    }
  
    Search = async () => {
      const results = await searchMovie(this.state.text, 0 ,'full')
      this.setState({
        movieList: results,
        isResultShown: true,
      })
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <TextInput style={styles.inputBar}
              value={this.state.text} 
              onChangeText={this.handleSearch} 
              placeholder="Search here"
            />
            <View style={styles.searchButton}>
              <TouchableOpacity style={styles.button} onPress={this.Search} disabled={!this.state.validSearch}>
                <Text style={styles.textColor}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.isResultShown &&
          ( <ScrollView style={styles.resultContainer}>
              <Text style={[styles.textColor, styles.movieTitle]}>{this.state.movieList.title}</Text>
              <View style={styles.infoContainer}>
                <Text style={[styles.textColor, styles.movieInfo]}>({this.state.movieList.year})</Text>
                <Text style={[styles.textColor, styles.movieInfo]}>{this.state.movieList.genre}</Text>
              </View>
              
              <View style={styles.buttonContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
                  <TouchableOpacity style={styles.alignCenter}>
                    <Icon name='bookmark-plus' size={25} color='white'/>
                    <Text style={[styles.textColor, {fontSize: 12}]}>Add to list</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
                  <TouchableOpacity style={styles.alignCenter}>
                    <Icon name='play-circle-outline' size={70} color='white'/>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginRight: 10}}>
                  <TouchableOpacity style={styles.alignCenter}>
                    <Icon name='share' size={30} color='white'/>
                    <Text style={[styles.textColor, {fontSize: 12}]}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <Text style={[styles.textColor, styles.moviePlot]}>{this.state.movieList.plot} </Text>

            
              <View style={styles.additionalInfoContainer}>
                <Text style={[styles.textColor, styles.additionalInfo]}><Text style={{fontStyle: 'italic'}}>Directed by..... </Text>{this.state.movieList.director} </Text>
                <Text style={[styles.textColor, styles.additionalInfo]}><Text style={{fontStyle: 'italic'}}>Actors.......... </Text>{this.state.movieList.actors} </Text>
              </View>

          </ScrollView> )}
        </View>
      )}
  }

  function HomeTab() {
    return ( 
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{
            headerTitle: 'Home',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#E96F6F',
              height: 90,
            }
        }} />
       </Stack.Navigator>
    )
  }
  
export default HomeTab  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36363A',
      paddingTop: Constants.statusBarHeight,
    },

    alignCenter: {
      alignItems: 'center',
      justifyContent:'center',
    },
  
    searchBar: {
      flexDirection: 'row',
      marginLeft: 8,
      marginRight: 10,
      marginBottom: 15,
      marginTop: 15,
    },
  
    inputBar: {
      minWidth: 280,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 2,
      padding: 5,
      color: 'white',
    },
  
    searchButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
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

    resultContainer: {
      margin: 10,
      borderTopColor: 'gray',
      borderTopWidth: 1,
    },

    movieTitle: {
      marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
    },

    infoContainer: {
      flexDirection: 'row',
      marginRight: 100,
    },
    movieInfo: {
      fontSize: 13,
      marginLeft: 20,
      fontStyle: 'italic'
    },
    moviePlot: {
      margin: 10,
      textAlign: 'left',
      fontSize: 15,
    },

    buttonContainer: {
      margin: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    additionalInfo: {
     
      marginLeft: 15,
    },
    additionalInfoContainer: {
      margin: 15,
    }
  });
  