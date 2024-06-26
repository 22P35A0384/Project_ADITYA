import { yellow } from "@mui/material/colors";
// import React from "react";
import { StyleSheet } from "react-native";

const Messengerstylings = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f2ee'
    },
    img:{
        height:50,
        width:50,
        borderRadius:50,
    },
    icon:{
        height:45,
        width:45,
    },
    body:{
        backgroundColor:'#f4f2ee',
        width:"102%",
        margin:10,
    },
    bot:{
        fontSize:16,
        fontWeight:'bold',

    },
    text_:{
        width:'90%',
        overflow:'hidden',
       
     

    },
   
    input:{
        
        width : '100%',
        height : 40,
        // borderRadius:10,
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:20,
    },
    b:{
        justifyContent:'center',
        alignItems:'center',
        width:'10%',
        
    

    },
    button:{
        
        width:'80%',
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    ar:{
        width:'50%',
        height:'50%',
        // color:'black',
        // fontWeight:'bold'
    },
    buttonText:{
        fontSize:5,
        fontWeight:'bold',
        color:'black'
    },
    focus:{
        height:60,
        width:60,
        alignItems: 'center',
        justifyContent: 'center',
        // margin:30,
        // padding:30,
        backgroundColor:'#f4f2ee',
        // position:'relative',
        // bottom:25,
        // borderRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    },
    sub1:{
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'white',
        // paddingTop:5,
        // paddingBottom:5,
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:10,
        position:'sticky'
    },
    Chat:{
        width:10,
        height:10,
        borderColor:'yellow',
    },
    
    div:{
        
        alignItems: 'center',
        backgroundColor:'#fd752c',
        paddingTop:10,
        height:60,
        paddingBottom:10,
        flexDirection:"row",
        justifyContent: 'flex-start',
        paddingLeft:10,
        paddingRight:10,
    },
    aiicon:{
        color:'blue',
        width:50,
        height:50,
    },
    gpts:{
        width : 50,
        height:50,
        borderRadius:50,
    },
    AI:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:50,
        paddingLeft:10,

    },
    chpt:{
        color:'white',
        fontSize:20,
        justifyContent:'center',
        fontWeight:'bold',

    },
    body1: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      chatContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      chatBubble: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
      },
      chatText: {
        fontSize: 16,
        marginLeft: 5,
      },
})

export default Messengerstylings;