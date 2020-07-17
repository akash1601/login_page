import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from 'react-native';
import * as firebase from 'firebase';
import Constants from 'expo-constants';
import App from './App';

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
})

export default class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    logInForm: false,
    passwordConfirm: '',
  }
  logInForm = () => {
    this.setState({logInForm: true})
  }
  signupUser = (username, password) => {
      try{ 
       if(this.state.password.length<6){
         alert("please enter valid password")
         return;
       }
       else if(this.state.password !== this.state.passwordConfirm){
         alert("please confirm password again")
         return;
       }
       firebase.auth().createUserWithEmailAndPassword(username,password).then(function (user){
          alert("thanks for successfully signing in")
       }
       )
       
     }

     catch(error){
       alert(error.toString())
     }

   }
  
  handleUsername = (username) => {
     this.setState({username})
  }
  handlePassword = (password) => {
     this.setState({password})
   }
   handleConfirmPassword = (passwordConfirm) => {
     this.setState({passwordConfirm})
   }
  render() {
     if (this.state.logInForm) return <App/>
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
        SignUp Form
      </Text>
        <TextInput
         keyboardType="email-address"
          style={styles.input}
           onChangeText = {this.handleUsername}
         
          placeholder="Email"
        />
        <TextInput
         keyboardType="email-address"
          style={styles.input}
          
          
          placeholder="Username"
        />
        <TextInput
         keyboardType="numeric"
          style={styles.input}
          
         
          placeholder="Phone Number"
        />
        <TextInput
         style={styles.input} secureTextEntry={true}
          keyboardType="password"
          onChangeText = {this.handlePassword}
          
       
          placeholder="Password"
        />
        <TextInput secureTextEntry={true} 
         style={styles.input}          
        
          onChangeText = {this.handleConfirmPassword}
          placeholder="Confirm Password"
        />
        <Button title="Submit" onPress={() => this.signupUser(this.state.username,this.state.password)} />
        <Button title="Already signed up go to Login page" onPress={this.logInForm}/>
      </KeyboardAvoidingView>
    )
  }
}
