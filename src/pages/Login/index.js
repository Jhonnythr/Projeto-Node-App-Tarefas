import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import firebase from '../../config/firebaseconfig'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    function loginFirebase () {
       

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                navigation.navigate("Task", { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
               
                let errorMessage = error.message;
                // ..
            });
    }


    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid })
            }
        })
    }, [])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>My Tasks</Text>
            <TextInput style={styles.input} placeholder={"Digite seu email"} type="text" value={email} onChangeText={(text) => setEmail(text)} />

            <TextInput style={styles.input} secureTextEntry={true} placeholder={"Digite sua senha"} type="text" value={senha} onChangeText={(text) => setSenha(text)} />

            {errorLogin === true
                ?
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name='alert-circle'
                        size={24}
                        color="bdbdbd"
                    />
                    <Text style={styles.warningAlert}>Invalid email or password</Text>
                </View>
                :
                <View></View>
            }
            {email === "" || senha === ""
                ?


                <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>


                :
                <TouchableOpacity style={styles.buttonLogin} onPress={()=> loginFirebase()}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>

            }
            <Text style={styles.registration}>Não possui conta?
                <Text style={styles.linkCadastrese} onPress={() => { navigation.navigate("NewUser") }}>Cadastre-se Aqui</Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}