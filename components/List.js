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
      .collection('Tests')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          data = documentSnapshot.data();
          console.log('yes', data);
        });
      });
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
