import React from "react";
import { StyleSheet } from "react-native";

const Spotlightstyling = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f2ee',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    banner:{
        height:'8%',
        backgroundColor:'#f4f2ee'
    },
    sub:{
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'#fd752c',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:"row",
        justifyContent: 'space-evenly',
        paddingLeft:10,
        paddingRight:10,
    },
    head:{
        fontSize:25,
        fontWeight:'bold',
        // lineHeight:30
    },
    img1:{
        height:30,
        width:50,
        // borderRadius:50
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
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Adjust background color as needed
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
    sub2:{
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        marginTop:'15%',
        marginLeft:'10%',
        marginRight:'10%',
        height:'55%',
        borderRadius:50,
        overflow: "hidden"
        // paddingTop:5,
        // paddingBottom:5,
        // flexDirection:"row",
        // justifyContent: 'space-between',
        // paddingLeft:10,
        // paddingRight:10,
    },
    sub3:{
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue',
        paddingTop:10,
        paddingBottom:10,
        width:80,
        // marginLeft:"40%",
        borderRadius:50
        // flexDirection:"row",
        // justifyContent: 'space-between',
        // paddingLeft:10,
        // paddingRight:10,
    },
    camera:{
        flex:1,
    },
    sub4:{
        // flex:1,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        paddingTop:25,
        paddingBottom:5,
        position:'relative',
        bottom:'150%',
        borderRadius:30,
        // flexDirection:"row",
        // justifyContent: 'space-between',
        // paddingLeft:10,
        // paddingRight:10,
    },
    get:{
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:10,
        paddingBottom:10,
        width:180,
        marginLeft:"28%",
        marginTop:30,
        borderRadius:50
        
    }
})

export default Spotlightstyling;