import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlassMartiniAlt, faBeer} from '@fortawesome/free-solid-svg-icons';

export default class SignUp extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleSignUp = () => {
    // TODO: Firebase stuff...
    auth()
      .createUserWithEmailAndPassword(
        `${this.state.email}`,
        `${this.state.password}`,
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

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
          placeholder="Email"
          placeholderTextColor="#00e1ff"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#00e1ff"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} color="#00e1ff" />
        <Button
          color="#f00"
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Welcome')}
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
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
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
