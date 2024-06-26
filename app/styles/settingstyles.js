import React from "react";
import { StyleSheet,Platform } from "react-native";
const Settingstylings = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'yellow',
        // width:100,
        height:300,
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
    },

    // Profile Page card  starts
    image:{
        flex:1,
    },
    div1:{
        
        height:'25%',
        // width:'70%',
        // backgroundColor:'yellow'

    },
    div2:{
        
        height:'30%',
        // width:'70%',
        alignItems:'center',
        // backgroundColor:'skyblue',
        
        justifyContent:'center',
       
        

    },
    div3:{
        
        height:'45%',
        // width:'70%',
        alignItems:"center",
        // justifyContent:'center',
        paddingTop:40
    },
    pro:{
        backgroundColor:'lightgrey',
        height:'100%',
        width:'50%',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        // Shadow properties for Android
        elevation: 5,
        borderWidth: 0.25, // Border width
        borderColor: 'black',
        },
        tuch:{
            backgroundColor:'#ff6900',
            height:'15%',
            width:'70%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            marginBottom:20
        
        },
        tuch1:{
            backgroundColor:'#ff6900',
            height:'15%',
            width:'70%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            marginBottom:20
        
        },
        tuch2:{
            backgroundColor:'#ff6900',
            height:'15%',
            width:'70%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            fontWeight:'bold'
        }
        
})


export default Settingstylings;