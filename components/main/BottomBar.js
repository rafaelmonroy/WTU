import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class BottomBar extends Component {
  render() {
    return <View style={styles.nagivation} />;
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
});
