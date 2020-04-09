import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faListOl,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export default class BottomBar extends Component {
  render() {
    return <View style={styles.nagivation}></View>;
  }
}

const styles = StyleSheet.create({
  nagivation: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#00e1ff',
  },
  icon: {
    color: '#00e1ff',
    marginTop: 2,
  },
});
