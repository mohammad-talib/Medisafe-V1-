import React,{Component} from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  logUser = (e, name) => {
    this.setState({
      [name]: e.nativeEvent.text
    });
  };

  getUser = () => {
    // console.log("State :", this.state);
    this.props.userLogin(this.state);
  };

  render() {
    return (
      <View>
        <TextInput
          onChange={event => this.logUser(event, "email")}
          autoCompleteType="email"
          placeholder="Email"
          style={styles.inputfieldlog}
        />
        <TextInput
          onChange={event => this.logUser(event, "password")}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputfieldlog}
        />
        <Button title="Login" onPress={this.getUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {},
  inputfieldlog: {
    height: 40,
    width: 150,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    margin: 5
  }
});

export default Login;
