import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../../contexts/GlobalContext';

const Map = () => {
  const {data} = useContext(GlobalContext);

  if (!data.length) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  } else if (data.length === 2) {
    return (
      <MapView
        style={styles.map}
        //provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34.04402,
          longitude: -118.1854,
          latitudeDelta: 0.2922,
          longitudeDelta: 0.2421,
        }}>
        {data.map(bar => {
          const id = bar._ref._documentPath._parts[1];
          const {name, coords} = bar._data;
          const coordinates = coords ? coords : {latitude: 0, longitude: 0};
          return (
            <Marker key={id} coordinate={coordinates} title={name}>
              <View style={styles.border}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faGlassCheers}
                  size={25}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  icon: {
    color: '#00e1ff',
  },
  border: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    justifyContent: 'center',
    padding: 10,
  },
});

export default Map;
