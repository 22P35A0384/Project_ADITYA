import React, {useState,useEffect} from "react";
import Styles from '../styles/fullprofilestyles.js';
import { Text, View,Image,Pressable, TouchableOpacity,Platform } from "react-native";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const fullProfile=()=>{
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const userFromStorage = await AsyncStorage.getItem('user');
            setUser(userFromStorage);
        } catch (error) {
            console.error('Error retrieving user:', error);
        }
        };

        fetchUserData();
    }, []);
    return(
        <>
            <View style={Styles.container}>
               <View style ={Styles.banner}>
                    <Image
                        source={require('../../assets/topbanner.jpg')}
                        style={{width:'100%',height:'100%'}}
                    />
               </View>
               <View style = {Styles.txt}><Text style={Styles.txt1}>Employee Profile</Text></View>
               <View style={Styles.v}>
                <View style={Styles.v1}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>ADMIN</Text>

                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>ACADEMICS</Text>
                        
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>PLACEMENTS</Text>

                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                </View>
                <View style={Styles.v2}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>MAIL</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>ADMISSIONS</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>EXAMINATION</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    
                </View>
                <View style={Styles.v3}>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx}>EMPLOYEE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx} >ATTENDANCE REPORTS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx}>TIME TABLE</Text>
                        </TouchableOpacity>
                    {/* <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View> */}
                </View>
                <View style={Styles.v4}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>LESSION PLAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>PERIODS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>RECEIPTS</Text>
                    </TouchableOpacity>
                    {/* <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View> */}
                </View>
               </View>
               {/* <View style = {Styles.buttons}>
                    <TouchableOpacity style={Styles.t}>
                        <Text style={Styles.b1}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.t}>
                        <Text style={Styles.b2}>logout</Text>
                    </TouchableOpacity>
               </View> */}
            </View>
            <View style={Styles.sub1}>
                <Pressable
                    onPress={()=>{router.push('/components/profile')}}
                >
                    <View
                        style={[Styles.focus]}
                    >
                            <Image
                            source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }}
                            style={[Styles.img]}
                            />
                    </View>
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/spotlight')}}
                >
                    <Image
                    source={require('../../public/face.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/')}}
                >
                    <Image
                    source={require('../../public/home.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/messenger')}}
                    style={Styles.icon}
                >
                    <Image
                    source={require('../../public/msg.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{router.push('/components/settings')}}
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

export default fullProfile;