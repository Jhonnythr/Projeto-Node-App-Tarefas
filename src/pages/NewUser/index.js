import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import firebase from '../../config/firebaseconfig'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    const registerFirebase = () => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                navigation.navigate("Task", { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                setErrorRegister(true)
                let errorCode = error.code;
               
                let errorMessage = error.message;
                // ..
            });
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <Text style={styles.title}>Criar Conta</Text>

            <TextInput style={styles.input} placeholder={"Digite seu email"} type="text" value={email} onChangeText={(text) => setEmail(text)} />

            <TextInput style={styles.input} secureTextEntry={true} placeholder={"Digite sua senha"} type="text" value={senha} onChangeText={(text) => setSenha(text)} />

            {errorRegister === true
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


                <TouchableOpacity disabled={true} style={styles.buttonCadastro}>
                    <Text style={styles.textButtonCadastro}>Cadastrar</Text>
                </TouchableOpacity>


                :
                <TouchableOpacity style={styles.buttonCadastro} onPress={ ()=>registerFirebase()}>
                    <Text style={styles.textButtonCadastro}>Cadastrar</Text>
                </TouchableOpacity>

            }
            <Text style={styles.registration}>Já possui conta?
                <Text style={styles.linkCadastrese} onPress={() => { navigation.navigate("Login") }}>Faça seu Login</Text>
            </Text>
            <View style={{ height: 100 }} />


        </KeyboardAvoidingView>
    )
}