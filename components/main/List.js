import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class List extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>TEMP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f00',
  },
});
