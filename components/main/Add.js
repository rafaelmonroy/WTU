import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import GOOGLE_API from '../../config/keys';

export default class Add extends React.Component {
  state = {name: '', address: '', successMessage: null, errorMessage: null};
  handleSubmit = () => {
    if (this.state.name !== '' && this.state.address !== '') {
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
      this.GooglePlacesRef.setAddressText('');
      setTimeout(() => this.setState({successMessage: false}), 3000);
    } else if (!this.state.name || !this.state.address) {
      this.setState({errorMessage: true});
      setTimeout(() => this.setState({errorMessage: false}), 3000);
    }
  };

  render() {
    const gKey = GOOGLE_API.key;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Submit a bar for us to check out!</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          placeholderTextColor="#B0B0B0"
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <GooglePlacesAutocomplete
          ref={instance => {
            this.GooglePlacesRef = instance;
          }}
          placeholder="Address"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance={'default'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            this.setState({address: data.description});
          }}
          getDefaultValue={() => this.state.address}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: gKey,
            language: 'en', // language of the results
            types: 'address', // default: 'geocode'
          }}
          styles={inputStyles}
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
    backgroundColor: '#fff',
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
    width: '100%',
    borderColor: 'gray',
    color: '#000',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 20,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
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

const inputStyles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  description: {
    fontWeight: 'bold',
  },
  listView: {
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    maxHeight: '25%',
  },
  textInput: {
    color: 'black',
  },
});
