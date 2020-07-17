import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import LoginScreen from './loginScreen';
import SignUp from './signUp';
import Welcome from './welcome';
import { Card } from 'react-native-paper';
const firebaseConfig = {
  apiKey: "AIzaSyCJ-j_7ba4Hz9Rcm7wIR9CL7pxHVwu1UgY",
  authDomain: "reactlogin-a5eaa.firebaseapp.com",
  databaseURL: "https://reactlogin-a5eaa.firebaseio.com",
  projectId: "reactlogin-a5eaa",
}
firebase.initializeApp(firebaseConfig)
// or any pure javascript modules available in npm





export default class App extends React.Component {
  state = {
    
    showForm: false,
    showWelcome: false,
    login: false,
    username: '',
    password: '',
  }
   handleUsername = (username) => {
     this.setState({username})
  }
  handlePassword = (password) => {
     this.setState({password})
   }
  showForm = () => {

     this.setState({showForm: true})
   }

  login = () => {
    this.setState({login: true})
  }
  // componentDidMount(){
  //   this.checkIfLoggedIn();
  //}
   loginUser = (username, password) => {
     try{ 
       if(this.state.password.length<6){
         alert("please enter valid password")
         return;
       }
      
       firebase.auth().signInWithEmailAndPassword(username,password).then(function (user){
         if (user){
          // this.props.navigation.navigate('LoginScreen')
          alert('welcome')
         }
          
       })
       
       
     
     }
     catch(error){
       alert(error.toString())
     }

   }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null){
        console.log(user)
      }
    })
  }

   async loginWithFacebook(){
      const {type, token} = await Facebook.logInWithReadPermissionsAsync ('753348625412749',{permissions: ['public_profile']})

      if (type == 'success'){
        const credential = firebase.auth.FacebookAuthProvider.credential(token)

        firebase.auth().signInWithCredential(credential).catch((error) => {
          console.log(error)
        })
      }
   }
   
  render() {
    if (this.state.showForm) return <SignUp/>
    if (this.state.login) return <Welcome/>

    
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Login Form
      </Text>
      <TextInput
          keyboardType="email-address"
          style={styles.input}
          value={this.state.username}
          onChangeText = {this.handleUsername}
          placeholder="Username or Email"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText = {this.handlePassword}
          placeholder="Password"
        />
          <Button title = "Login" onPress= {() => this.loginUser(this.state.username,this.state.password)}/>
          <Button title = "SignUp" onPress={this.showForm}/>
         
          
    </View>
  );
}}

// const AppSwitchNavigator = createSwitchNavigator({
//   LoginScreen: LoginScreen,
  
// })

//const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 5,
    marginHorizontal: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  
});
