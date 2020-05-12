import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import GooglePlacesInput from './GooglePlacesInput';

export default class Add extends React.Component {
  state = {name: '', address: '', successMessage: null, errorMessage: null};

  handleSubmit = () => {
    if (this.name !== '' && this.address !== '') {
      firestore()
        .collection('PotentialBars')
        .add({
          name: this.state.name,
          address: this.state.address,
        })
        .then(() => {
          console.log('Bar added!');
        });
      this.setState({name: '', address: '', successMessage: true});
      setTimeout(() => this.setState({successMessage: false}), 3000);
    } else if (!this.name || !this.address) {
      this.setState({errorMessage: true});
      setTimeout(() => this.setState({errorMessage: false}), 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Submit a bar for us to check out!</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          placeholderTextColor="#00e1ff"
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <GooglePlacesInput />
        <TextInput
          style={styles.addressInput}
          placeholder="Address"
          placeholderTextColor="#00e1ff"
          onChangeText={address => this.setState({address})}
          value={this.state.address}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {this.state.successMessage && (
          <View style={styles.successContainer}>
            <Text style={styles.success}>
              Thank you! {'\n'} We will check this bar out and if it's good, we
              will add to map.
            </Text>
          </View>
        )}
        {this.state.errorMessage && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>Both fields are required</Text>
          </View>
        )}
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
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e1ff',
    marginTop: 20,
  },
  buttonText: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
  },
  nameInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    color: '#fff',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  addressInput: {
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
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  icon: {
    color: '#00e1ff',
    marginTop: 2,
  },
  successContainer: {
    marginTop: 40,
  },
  success: {
    color: '#00e1ff',
    textAlign: 'center',
  },
  errorContainer: {
    marginTop: 40,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
