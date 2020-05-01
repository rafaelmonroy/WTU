import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../../contexts/GlobalContext';

const Map = () => {
  const {data} = useContext(GlobalContext);

  const coords = data.coords ? data.coords : {latitude: 0, longitude: 0};

  return (
    <MapView
      style={styles.map}
      //provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 34.04402,
        longitude: -118.1854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={coords} title={data.name}>
        <View style={styles.border}>
          <FontAwesomeIcon style={styles.icon} icon={faGlassCheers} size={25} />
        </View>
      </Marker>
    </MapView>
  );
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
});

export default Map;
