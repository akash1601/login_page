import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, Text, View} from 'react-native'
import Constants from 'expo-constants';
import App from './App'

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

export default class Welcome extends React.Component {
  state = {
    
    logOutForm: false,
 
  }
  logOutForm = () => {
    this.setState({logOutForm: true})
  }
  // state = {
  //   name: '',
  //   phone: '',
  //   isFormValid: false,
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
  //     this.validateForm()
  //   }
  // }

  // getHandler = key => val => {
  //   this.setState({[key]: val})
  // }

  // handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
  // handlePhoneChange = this.getHandler('phone')

  //   /*
  // handleNameChange = name => {
  //   this.setState({name})
  // }
  // */

  // handlePhoneChange = phone => {
  //   if (+phone >= 0 && phone.length <= 10) {
  //     this.setState({phone})
  //   }
  // }

  // validateForm = () => {
  //   console.log(this.state)
  //   const names = this.state.name.split(' ')
  //   if (+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0] && names[1]) {
  //     this.setState({isFormValid: true})
  //   } else {
  //     this.setState({isFormValid: false})
  //   }
  // }

  // validateForm2 = () => {
  //   if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }


  // handleSubmit = () => {
  //   this.props.onSubmit(this.state)
  // }

  render() {
     if (this.state.logOutForm) return <App/>
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.paragraph}>
        Welcome
      </Text>
      <Button title="Logout" onPress={this.logOutForm}/>
      </KeyboardAvoidingView>
    )
  }
}
