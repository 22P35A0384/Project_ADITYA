import React, { useState,useEffect } from "react";
import { TextInput,Button,View,Text,Image,Alert } from "react-native";
import Styles from '../styles/loginstyles'
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
const Login=()=>{
    // useEffect(() => {
    //     const key = 'user'
    //     try {
    //         const value = AsyncStorage.getItem(key);
    //     if (value !== null) {
    //         router.push('/')
    //     }
    //     } catch (error) {
    //         console.log('Error retrieving data:', error);
    //     }
    //   }, []);
    const [Logindata,Setlogindata] = useState({
        'username':'',
        'password':''
    })
    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
          console.log(AsyncStorage.getItem('user'));
        } catch (error) {
          console.log('Error storing data:', error);
        }
      };
      
    const Handlelogin=(e)=>{
        if(Logindata.username===""){
            window.alert('Enter Your User Id')
        }else if(Logindata.password===""){
            window.alert('Enter Your Password!!')
        }else{
            e.preventDefault()
            axios.post('https://space-club.onrender.com/adityalogins',Logindata).then((res)=>{
                if(res.data===null){
                    Alert.alert('User Not Found')
                }else if(res.data===false){
                    Alert.alert('Invalid Password')
                }else{
                    // console.log(res.data.type_of_user)
                    if(res.data.type_of_user==='admin'){
                        router.push('/')
                        storeData('user',Logindata.username)
                        storeData('tuser',res.data.type_of_user)
                    }else{
                        router.push('/components/studenthome')
                        storeData('user',Logindata.username)
                        storeData('tuser',res.data.type_of_user)
                    }
                }
                // if(res.data){
                //     storeData('user',Logindata.username)
                    // Alert.alert(Logindata.username)
                //     router.push('/')
                // }else{
                //     Alert.alert('Login Failed')
                // }
            })
        }
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.imgcontr}>
                <Image
                    source={require('../../public/logo.png')}
                    style={Styles.img}
                />
            </View>
            <View style={Styles.loginblock}>
                {/* <Text>Employee Login</Text> */}
                <TextInput
                    placeholder="USER NAME"
                    style={Styles.input}
                    onChangeText={(e)=>Setlogindata({...Logindata,username:e})}
                />
                <TextInput
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    style={Styles.input}
                    onChangeText={(e)=>{Setlogindata({...Logindata,password:e})}}
                />
                <Button
                    title="LOGIN"
                    onPress={Handlelogin}
                />
            </View>
            {/* <View>
                <Text>Powered By THUb</Text>
            </View> */}
        </View>
    )}

export default Login;