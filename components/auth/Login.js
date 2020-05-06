import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    // TODO: Firebase stuff...
    auth()
      .signInWithEmailAndPassword(
        `${this.state.email}`,
        `${this.state.password}`,
      )
      .then(() => {
        console.log('User logged in');
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Worknight Turn Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#00e1ff"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#00e1ff"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} color="#00e1ff" />
        <Button
          color="#f00"
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    color: '#fff',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  icon: {
    color: '#00e1ff',
    marginTop: 2,
  },
});
