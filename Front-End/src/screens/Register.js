import React,{Component} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class Register extends Component {
    state={
        username:'',
        email:'',
        password:'',
        age:'',
        gender:''
    }

    change = (e,name) =>{
        console.log('name :', name);
        this.setState({
            [name]:e.nativeEvent.text
        })
    }

    addNewUser=()=>{
        console.log('this.state :', this.state);
        this.props.addRegistration(this.state);
        // this.setState({
        //     username:'',
        //     email:'',
        //     password:'',
        //     age:'',
        //     gender:''
        // })
        }

  render() {
      
    return (
      <View style={styles.screen}>
        <TextInput onChange={(event)=>this.change(event,'username')} type="text" placeholder="UserName"  style={styles.inputfield} />
        <TextInput onChange={(event)=>this.change(event,'email')} autoCompleteType="email" placeholder="Email"  style={styles.inputfield} />
        <TextInput onChange={(event)=>this.change(event,'password')} secureTextEntry={true} placeholder="Password"  style={styles.inputfield} />
        <TextInput onChange={(event)=>this.change(event,'age')} type="number" placeholder="Age" style={styles.inputfield} />
        <TextInput onChange={(event)=>this.change(event,'gender')} type="text" placeholder="Gender" style={styles.inputfield} />
        <Button title="Submit" onPress={this.addNewUser}/>
        {/* <Text>Register screen </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {},
  inputfield: {
    height: 40,
    width: 150,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    margin: 5
  }
});

export default Register;
