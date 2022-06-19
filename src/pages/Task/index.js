import React, { useState, useEffect } from "react";
import { SafeareaView, View, Text, TouchableOpacity, FlatList } from "react-native"
import firebase from "../../config/firebaseconfig"
import styles from "./style"
import { FontAwesome, MaterialCommunityIcons, AntDesign  } from "@expo/vector-icons"


export default function Task({ navigation, route }) {
    

    const [task, setTask] = useState([]) //guardar nossa lista de tarefas
    const database = firebase.firestore()

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
          }).catch((error) => {
           
          });
    }


    function deleteTask(id) {
       console.log("entrou");
     database.collection(route.params.idUser).doc(id).delete(id)
     
    }

    useEffect(() => {
        database.collection(route.params.idUser).onSnapshot((query) => {
            
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
          
        })  //banco no firebase
    }, [])


    return (
       
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({item}) => {
                  console.log(item);
                  console.log(item.id);
                  console.log();
                    return(
                    <View style={styles.Tasks}>

                        <TouchableOpacity style={styles.deleteTask}
                            onPress={() => {
                                deleteTask(item.id)
                            }}> 
                            <AntDesign
                                name="minuscircle"
                                size={23}
                                color="#e8a11e"
                            >

                            </AntDesign>
                        </TouchableOpacity>
                        <Text
                            style={styles.DescriptionTask}
                            onPress={() => {
                                navigation.navigate("Details", {
                                    id: item.id,
                                    description: item.description,
                                    idUser: route.params.idUser
                                })
                            }}
                        >
                            {item.description}
                        </Text>

                    </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask", { idUser: route.params.idUser
                
                })}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogout}
                onPress={() => {logout()}}>
                <Text style={styles.iconButtonLogout}><MaterialCommunityIcons
                name="location-exit"
                size={23}
                color="#e8a11e"
                /></Text>
            </TouchableOpacity>

        </View>
    )
}