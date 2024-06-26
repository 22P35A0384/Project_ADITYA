import React, {useState,useEffect} from "react";
import Home from './components/home';
import { View,Text,Image, Pressable } from "react-native";
import Styles from './styles/indexstyles';
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Index=()=>{
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
      <Home/>
      <View style={Styles.sub1}>
        <Pressable
            onPress={()=>{router.push('/components/profile')}}
        >
            <Image
            source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }}
            style={[Styles.img]}
            />
        </Pressable>
          <Pressable
            onPress={()=>{router.push('/components/spotlight')}}
          >
            <Image
              source={require('../public/face.png')}
              style={Styles.icon}
            />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/')}}
              style={Styles.focus}
          >
              <Image
              source={require('../public/home.png')}
              style={Styles.icon}
              />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/components/messenger')}}
          >
              <Image
              source={require('../public/msg.png')}
              style={Styles.icon}
              />
          </Pressable>
          <Pressable
              onPress={()=>{router.push('/components/settings')}}
          >
              <Image
              source={require('../public/settings.png')}
              style={Styles.icon}
              />
          </Pressable>
      </View>
    </>
  )
}

export default Index;