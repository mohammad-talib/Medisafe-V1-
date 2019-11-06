import React,{Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Path from './src/Components/path';

export default class App extends Component {
  render(){
    const localhost= Path.yasmin;
    console.log(localhost);
    return (
      <View style={styles.container}>
        <Text>Open </Text>
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