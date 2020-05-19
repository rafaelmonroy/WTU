import React, {useContext, Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlassMartiniAlt, faBeer} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        <FontAwesomeIcon icon={faBeer} size={25} style={styles.icon} />
        WTU
        <FontAwesomeIcon
          icon={faGlassMartiniAlt}
          size={21}
          style={styles.icon}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'column',
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
  },
});

export default Header;
