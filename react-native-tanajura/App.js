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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./components/Login.js";
import { CriarConta } from "./components/CriarConta.js";
import { EsqueciSenha } from "./components/EsqueciSenha.js";
import { EscolherFuncao } from "./components/EscolherFuncao.js";
import { Mapa } from "./components/Mapa.js";


 
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login}></Stack.Screen>
        <Stack.Screen name="CriarConta" component={CriarConta}></Stack.Screen>
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha}></Stack.Screen>
        <Stack.Screen name="EscolherFuncao" component={EscolherFuncao}></Stack.Screen>
        <Stack.Screen name="Mapa" component={Mapa}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
