import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


export function EscolherFuncao( { navigation } ) {


    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/images/sun-cloud.png")} />
                <Text style={styles.temp}>30°C</Text>
                <Text>RECIFE - 20 DE MAIO DE 2022</Text>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Mapa')} style={styles.loginBtn}>
                <Text>Mapa dos Desastres</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.loginBtn}>
                <Text>Alerta de Chuva</Text>
            </TouchableOpacity>
        </View>
    );

  }
  

   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#396ff5",
      alignItems: "center",
      justifyContent: "center",
    },

    temp: {
        fontSize: 50

    },
   
    image: {
        height: 100,
        width: 100,
        marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginTop: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });
