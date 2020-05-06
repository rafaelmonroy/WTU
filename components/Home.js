import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//fontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faListOl,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

//components
import MainStatusBar from './main/MainStatusBar';
import Header from './main/Header';
import Map from './main/Map';
import BottomBar from './main/BottomBar';
import List from './main/List';
import Add from './main/Add';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.constainer}>
        <MainStatusBar />
        <Header />
        <Tab.Navigator
          screenProps={{signOut: 'this.signOut'}}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              switch (route.name) {
                case 'Map':
                  return (
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size={25}
                      style={focused ? styles.selectedIcon : styles.icon}
                    />
                  );
                  break;
                case 'List':
                  return (
                    <FontAwesomeIcon
                      icon={faListOl}
                      size={25}
                      style={focused ? styles.selectedIcon : styles.icon}
                    />
                  );
                  break;
                case 'Add':
                  return (
                    <FontAwesomeIcon
                      icon={faPlus}
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
          <Tab.Screen name="Add" component={Add} />
        </Tab.Navigator>
        <BottomBar />
      </View>
    </NavigationContainer>
  );
};

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

export default Home;
