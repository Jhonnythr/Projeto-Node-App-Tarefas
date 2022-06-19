import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "./style"
import firebase from "../../config/firebaseconfig";

export default function Details({navigation, route}){
   
    const database = firebase.firestore()
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id 

    function editTask(description, id) {
        console.log("entrou");
        database.collection(route.params.idUser).doc(id).update({
            description: descriptionEdit,
            
        })
        navigation.navigate("Task")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Detalhes: </Text>
            <TextInput
            style={styles.inputText}
            placeholder="Ex: Pagar mensalidade"
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
            
            />
            <TouchableOpacity style={styles.buttonNewTask}
             onPress={()=>{editTask(descriptionEdit, idTask)}}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}