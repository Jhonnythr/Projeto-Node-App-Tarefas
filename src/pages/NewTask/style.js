import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    label:{
        width:"90%",
        marginTop: 20,
        marginLeft:20,
        color: "#e8a11e",
        fontSize:16
    },
    inputText:{
        marginLeft: 'auto',
        marginRight: "auto",
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#e8a11e"
    },
    buttonNewTask:{
        width:60,
        height:60,
        position:"absolute",
       
        bottom:30,
        left:20,
        backgroundColor: "#e8a11e",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize: 16,
        fontWeight:"bold"
    }
})

export default styles