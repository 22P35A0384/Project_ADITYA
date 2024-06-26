import React from "react";
import { StyleSheet,Platform } from "react-native";

const Spotlightstyling = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor:'#f4f2ee'
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
    banner:{
        height:'8%',
        backgroundColor:'#f4f2ee'
    },
    txt:{
        height:'5%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    tx:{
        fontWeight:'bold',
        color:'white'
    },
    txt1:{
        fontSize:20,
        fontWeight:'bold',
            },
    v:{
        height:"70%",
        // backgroundColor :'skyblue',
        padding:10
    },
    v1:{
        height:'25%',
        borderRadius:5,
        // backgroundColor:'white',
        // overflow:'hidden',
        flexDirection:'row',
        
    },
    
    v2:{
        height:'25%',
        borderRadius:5,
        // backgroundColor:'white',
        
        flexDirection:'row'
    },
    v3:{
        height:'25%',
        borderRadius:5,
        // backgroundColor:'white', 
        flexDirection:'row'
    },
    v4:{
        height:'25%',
        borderRadius:5,
        // backgroundColor:'white',
        flexDirection:'row'
    },
    v11:{
        width:'28%',
        backgroundColor:'#2c7598',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        ...Platform.select({
            android:{
              elevation:25
            }
          })
    },

    buttons:{
        height:'10%',
        // backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    t:{  
          height:'60%',
          width:'30%',
          backgroundColor:'orange',
        //   backgroundGradient: "row",
        // backgroundGradientLeft: "orange",
        // backgroundGradientRight: "red",
    
        // background: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19),
        // box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75),
          borderRadius:20,
          alignItems:'center',
          justifyContent:'center',
          margin:20,
          ...Platform.select({
            android:{
              elevation:20
            }

        
          })
        
    },
    
})

export default Spotlightstyling;