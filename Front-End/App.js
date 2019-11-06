import React,{Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import axios from 'axios';
import Path from './src/Components/path';
import Register from './src/screens/Register';

export default class App extends Component {

  state={
    users:[],
    user:''
  }

  addRegistration = user => {
    axios
      .post("http://10.60.243.107:2000/registration", user)
      .then(({ data }) => {
        console.log("REGISTAR:", data);
        this.setState({ user: data });
      })
      .catch(error => {
        console.log(error);
      });

    console.log('State :', this.state.users);
  };

  render(){
    const localhost= Path.yasmin;
    console.log(localhost);
    return (
      <View style={styles.container}>
        <Register addRegistration={this.addRegistration}/>
        {/* <Text>Open</Text> */}
      </View>
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });