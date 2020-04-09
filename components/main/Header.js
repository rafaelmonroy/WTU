import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
        <View style={styles.empty} />
        <Text style={styles.text}>
          <FontAwesomeIcon icon={faBeer} size={25} style={styles.icon} /> WTU{' '}
          <FontAwesomeIcon
            icon={faGlassMartiniAlt}
            size={21}
            style={styles.icon}
          />
        </Text>

        <TouchableOpacity onPress={this.signOut} style={styles.button}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#00e1ff',
  },
  text: {
    flex: 3,
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
  button: {
    flex: 1,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e1ff',
    marginTop: 3,
    marginRight: 5,
    paddingLeft: 3,
    paddingRight: 3,
  },
  empty: {
    flex: 2.3,
  },
});
