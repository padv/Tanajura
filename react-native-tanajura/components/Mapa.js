import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Marker } from "react-native-maps";
import {useState} from "react";
import {useEffect} from "react";


export function Mapa() {
  
  return (
    
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
          latitude:-8.0162143,
          longitude:-34.91209939999999,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421 
      }}>
        <Marker coordinate={{
          latitude:-8.0162143,
          longitude:-34.91209939999999,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }} />
        <Marker coordinate={{
          latitude:-8.0276204,
          longitude:-34.90350669999998,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }} />
        <Marker coordinate={{
          latitude:-8.1246849,
          longitude:-34.95371439999997,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }} />
        <Marker coordinate={{
          latitude:-8.122163,
          longitude:-34.949085500000024,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }} />
      </MapView>

    </View>
  );
}

async function alertaFetch() {
  let response = await fetch('http://localhost:8000/ocorrencias');
  let responseJson = await response.json();
  console.log(responseJson);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});