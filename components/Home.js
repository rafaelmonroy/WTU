import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//fontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faListOl,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

//components
import MainStatusBar from './main/MainStatusBar';
import Header from './main/Header';
import Map from './main/Map';
import BottomBar from './main/BottomBar';
import List from './main/List';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <View style={styles.constainer}>
          <MainStatusBar />
          <Header />
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused}) => {
                if (route.name === 'Map') {
                  return (
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size={25}
                      style={focused ? styles.selectedIcon : styles.icon}
                    />
                  );
                } else if (route.name === 'List') {
                  return (
                    <FontAwesomeIcon
                      icon={faListOl}
                      size={25}
                      style={focused ? styles.selectedIcon : styles.icon}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'red',
              activeBackgroundColor: 'black',
              inactiveBackgroundColor: 'black',
              showLabel: false,
              style: {
                borderTopWidth: 4,
                borderTopColor: '#00e1ff',
              },
            }}>
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="List" component={List} />
          </Tab.Navigator>
          <BottomBar />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    position: 'relative',
    height: '100%',
  },
  icon: {
    color: '#fff',
    marginTop: 2,
  },
  selectedIcon: {
    color: '#00e1ff',
    marginTop: 2,
  },
});
