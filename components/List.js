import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'LIST VIEW',
    };
  }

  componentDidMount() {
    firestore()
      .collection('bars')
      .onSnapshot(querySnapshot => {
        console.log('success');
      });
    console.log('test');
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>{this.state.text}</Text>
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
