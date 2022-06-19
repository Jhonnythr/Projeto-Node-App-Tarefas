import {Platform, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: Platform.OS === "ios"? 0 : 50
    },
    title:{
        fontSize: 48,
        color: "#e8a11e",
        marginBottom:10,
        fontWeight:"bold"
    },
    input:{
        marginLeft: 'auto',
        marginRight: "auto",
        width:300,
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#e8a11e",
        color:"#4d5156"
    },
    buttonCadastro:{
        width:200,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#e8a11e",
        marginTop:30,
        borderRadius:50
    },
    textButtonCadastro:{
        color:"#ffffff"
    },
    contentAlert:{
        marginTop:20,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
    },
    warningAlert:{
        paddingLeft:10,
        color:"#bdbdbd",
        fontSize:16
    },
    registration:{
        marginTop:20,
        color:"#3d55156",

    },
    linkCadastrese:{
        color:"#1877f2",
        fontSize:16
    }
})
export default styles