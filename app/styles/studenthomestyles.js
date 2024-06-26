import { StyleSheet ,Platform} from "react-native";

const Homestyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f2ee'
    },
    sub1:{
        alignItems: 'center',
        backgroundColor:'#fd752c',
        // flexDirection:"row",
        justifyContent: 'center',
        height : 80,
        resizeMode:'cover',
        overflow:'hidden',
        padding:2
    },
    banner:{
        height:'100%',
        width:'100%'
    },
    head:{
        fontSize:25,
        fontWeight:'bold',
        // lineHeight:30
    },
    img:{
        height:30,
        width:50,
        // borderRadius:50
    },
    msg:{
        height:30,
        width:30,
    },
    h1:{
        height:30,
        backgroundColor:'black',
        flexDirection:'row',
        borderColor:'white',
        borderBottomWidth:2,
        borderTopWidth:1
    },
    h11:{
        height:'100%',
        width:'30%',
        backgroundColor:'red',
        borderTopRightRadius:50,
        justifyContent:'center',
        alignItems:'center'
        
    },
    h12:{
        height:'100%',
        width:'70%',
        // backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    update:{
        fontSize:20,
        color:'white',
        fontStyle:'italic',
    },
    h2:{
        height:130,
        width:'100%',
        borderTopColor:'green',
        borderTopWidth:0.5,
        padding:5
    },
    ban1:{
        height:'100%',
        width:'100%',
        // ...Platform.select({
        //     android:{
        //       elevation:25
        //     },
   
        //   })

    },
    h3:{
        height:350,
        width:'100%',
        // backgroundColor:'green',
        borderTopColor:"#f4f2ee",
        borderTopWidth:10,
        
        
        
    },
    flash:{
        backgroundColor:'#ff6900',height:'100%',width:'60%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    updtflash:{
        height:80,
        width:'90%',
        backgroundColor:'white',
        marginBottom:15,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        flexDirection:'row',
        ...Platform.select({
            android:{
              elevation:50
            },
          })

        },

        updtflash1:{
            width:'2%',
            backgroundColor:'red',
            height:'80%',
            borderRadius:5
        },
        updtflash2:{
            width:'90%',
            // backgroundColor:'green',
            height:'100%',
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
        shadowColor:'black',
        },
        t1:{
            height:'17%',
            
            alignItems:'center',
            justifyContent:'center'
        },
        t2:{
            height:'80%',
            
            alignItems:'center',
            justifyContent:'center',
            // resizeMode:'cover'
        },
        thub:{
            height:'100%',
            width:'85%',
            backgroundColor:'white',
            borderRadius:5,
            resizeMode:'cover',
            justifyContent:'center',
            alignItems:'center',
            

        },
        thub1:{
            height:'100%',
            width:'100%',
            resizeMode:'stretch'
        } ,
        h4:{
            height:300,
            // backgroundColor:'black'
        },
        placement:{
            height:'85%',
            width:'90%',
            resizeMode:'cover',
            alignContent:'center',
            justifyContent:'center',
            overflow:'scroll'
        },
        rank:{
            height:'7%',
            alignItems:'center',
            justifyContent:'center'
        },
        rankk:{
            height:'100%',
            width:'85%',
            // backgroundColor:'white',
            borderRadius:5,
            resizeMode:'cover',
            justifyContent:'center',
            alignItems:'center',
        },
        rank1:{
            height:'20%',
            width:'80%',
            resizeMode:'stretch',
            borderRadius:5,
            
        },
        r:{
            height:'93%',
            alignItems:'center',
            justifyContent:'center',
            resizeMode:'stretch',
            // backgroundColor:'black'
        },
        rank:{
            height:'5%',
            // backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            
        },
        rank1:{
            height:'95%',
            alignItems:'center',
            justifyContent:'center'
        },
        card:{
            height:'23%',
            width:'85%',
            // backgroundColor-*-:'white',
            margin:10,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            resizeMode:'stretch',
            overflow:'hidden'
        },
        sub11:{
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
        img1:{
            height:50,
            width:50,
            borderRadius:50,
        },
        icon:{
            height:45,
            width:45,
            // position:"relative",
            // top:25
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
        


    
});

export default Homestyles;