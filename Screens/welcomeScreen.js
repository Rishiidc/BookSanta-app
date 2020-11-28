import * as React from 'react'
import { View, Text, Stylehseet, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            EmailID: '',
            Password: ''
        }
    }
    userSignUp = (Email,Password) =>{
        firebase.auth().createUserWithEmailAndPassword(Email,Password)
        .then(response=>{return(alert("User Sdded Successfully"))})
        .catch(function(error){
            return(alert(error.message))
        })
    }
    login = (Email,Password) =>{
        firebase.auth().signInWithEmailAndPassword(Email,Password)
        .then(()=>{return(alert("Successfully Logged In"))})
        .catch(function(error){
            return(alert(error.message))
        })
    }
    render(){
        return(
            <View>
                <TextInput placeholder = 'Enter E-mail ID' keyboardType = 'email-address' onChangeText = {text =>{this.setState({EmailID: text})}}></TextInput>
                <TextInput placeholder = 'Enter Password' secureTextEntry = {true} onChangeText = {text =>{this.setState({Password: text})}}></TextInput>

                <TouchableOpacity onPress = {()=>{this.login(this.state.EmailID,this.state.Password)}}>
                   <Text>Login</Text>   
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>{this.userSignUp(this.state.EmailID,this.state.Password)}}>
                   <Text>Sign Up</Text>   
                </TouchableOpacity>
            </View>
        )
    }
}