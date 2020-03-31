import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

export default class MainStatusBar extends Component {
  render() {
    return (
      <View style={styles.statusbar}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: '#000',
    height: 40,
  },
});
