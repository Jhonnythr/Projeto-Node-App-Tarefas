import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import firebase from "../../config/firebaseconfig";
import styles from "./style"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

export default function NewTask({navigation, route}){
    //adicionar na collection
    
    const database = firebase.firestore()

    const [description, setDescription] = useState(null)


    function addTask() { 
        
        console.log("entrou");
        database.collection(route.params.idUser).add({
            
            description: description,
            status: false
            
        })
       
        navigation.navigate("Task")
    }





    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição: </Text>
            <TextInput
            style={styles.inputText}
            placeholder="Ex: Pagar mensalidade"
            onChangeText={setDescription}
            
            />
            <TouchableOpacity style={styles.buttonNewTask}
             onPress={()=>{addTask()}}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>







           

        </View>
    )
}