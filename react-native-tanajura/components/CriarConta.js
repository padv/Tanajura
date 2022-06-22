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


export function CriarConta( { navigation } ) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/Logo_Tanajura.jpg")} />
        
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="E-mail"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
        
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="    Senha"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('EscolherFuncao')} style={styles.loginBtn}>
                <Text style={styles.loginText}>CRIAR</Text>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
                <Text style={styles.forgot_button}>Esqueci a Senha</Text>
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
   
    image: {
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
