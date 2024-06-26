import React from "react";
import Styles from '../styles/fullprofilestyles.js';
import { Text, View,Image,Pressable, TouchableOpacity,Platform } from "react-native";
import { router } from "expo-router";
import { useState, useEffect } from "react";
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
               <View style = {Styles.txt}><Text style={Styles.txt1}>Student Profile</Text></View>
               <View style={Styles.v}>
                <View style={Styles.v1}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Bio-Data</Text>

                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Attemdence</Text>
                        
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Backlogs</Text>

                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                </View>
                <View style={Styles.v2}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Marks</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Fee Details</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Online Payment</Text>
                        {/* <View style={Styles.v11}></View> */}
                    </TouchableOpacity>
                    
                </View>
                <View style={Styles.v3}>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx}>Online Transactions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx} >Study Certificate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.v11}>
                            <Text style={Styles.tx}>Performance</Text>
                        </TouchableOpacity>
                    {/* <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View>
                    <View style={Styles.v11}></View> */}
                </View>
                <View style={Styles.v4}>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>TimeTable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}> Book Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.v11}>
                        <Text style={Styles.tx}>Receipts</Text>
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
                    onPress={()=>{router.push('/components/fullprofile')}}
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
                    style={Styles.icon}
                >
                    <Image
                    source={require('../../public/msg.png')}
                    style={Styles.icon}
                    />
                </Pressable>
                <Pressable
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

export default fullProfile;