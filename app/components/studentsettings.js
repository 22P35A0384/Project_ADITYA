import React, { useState, useEffect } from "react";
import Styles from '../styles/settingstyles.js';
import { Text, View,Image,Pressable ,TouchableOpacity} from "react-native";
import { ImageBackground } from "react-native";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Settings=()=>{
    const [user, setUser] = useState('');
    const [userdata, setuserdata] = useState({})
    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const userFromStorage = await AsyncStorage.getItem('user');
            setUser(userFromStorage);
            axios.post('https://space-club.onrender.com/adityastd',{username:userFromStorage}).then((res)=>{
                setuserdata(res.data)
                console.log(res.data)
                console.log(userdata)
            })
            
        } catch (error) {
            console.error('Error retrieving user:', error);
        }
        };

        fetchUserData();
    }, []);
    return(
        <>
            <View style={Styles.container}>
                <ImageBackground source={require('../../assets/Back.jpg')} resizeMode="cover" style={Styles.image}>
                    <View style = {Styles.div1}></View>
                    <View style = {Styles.div2}>
                        <View style={Styles.pro}>
                            <Image source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }} style={{height:'100%', width:'100%'}}/>
                        </View>
                    </View>
                    <View style = {Styles.div3}>
                        <TouchableOpacity style={Styles.tuch}>
                            <Text>{userdata.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.tuch1}>
                            <Text>Change Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.tuch2} onPress={(e)=>{router.navigate('/components/logout')}}>
                            <Text>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
            <View style={Styles.sub1}>
                <Pressable
                    onPress={()=>{router.push('/components/fullprofile')}}
                >
                    <Image
                    source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }}
                    style={[Styles.img]}
                    />
                </Pressable>
                {/* <Pressable
                    onPress={()=>{router.push('/components/spotlight')}}
                >
                    <Image
                    source={require('../../public/face.png')}
                    style={Styles.icon}
                    />
                </Pressable> */}
                <Pressable
                    onPress={()=>{router.push('/components/studenthome')}}
                >
                    <Image
                    source={require('../../public/home.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/studentmessenger')}}
                >
                    <Image
                    source={require('../../public/msg.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    style={Styles.focus}
                    onPress={()=>{router.push('/components/studentsettings')}}
                >
                    <Image
                    source={require('../../public/settings.png')}
                    style={Styles.icon}
                    />
                </Pressable>
            </View>
        </>
    )
};

export default Settings;