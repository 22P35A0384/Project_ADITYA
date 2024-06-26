import React from "react";
import { StyleSheet } from "react-native";

const Spotlightstyling = StyleSheet.create({
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
    banner:{
        height:'8%',
        backgroundColor:'#f4f2ee'
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
    }
})

export default Spotlightstyling;