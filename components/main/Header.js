import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlassMartiniAlt, faBeer} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';

export default class Header extends Component {
  signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  render() {
    return (
      <View style={styles.header}>
        <FontAwesomeIcon icon={faBeer} size={25} style={styles.icon} />
        <Text>{'  '}</Text>
        <Text style={styles.text}>WTU</Text>
        <Text>{'  '}</Text>
        <FontAwesomeIcon
          icon={faGlassMartiniAlt}
          size={21}
          style={styles.icon}
        />
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#00e1ff',
  },
  text: {
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
