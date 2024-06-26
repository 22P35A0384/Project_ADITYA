import React, { useEffect,useRef,useState } from 'react';
import { Text, View, Image, Pressable, ScrollView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../styles/studenthomestyles.js'
import { router } from 'expo-router';

const AutoScrollingHorizontalScrollView = ({ children }) => {
  const scrollViewRef = useRef();
  const [contentWidth, setContentWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollIntervalRef = useRef();

  useEffect(() => {
    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollViewRef.current) {
          // Check if reached end of content, then reset position quickly
          if (scrollPosition >= contentWidth) {
            scrollViewRef.current.scrollTo({ x: 0, animated: false });
            setTimeout(() => {
              setScrollPosition(0);
            }, 1000); // Scroll back to the beginning quickly within 1 second
          } else {
            setScrollPosition(scrollPosition + 1);
            scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
          }
        }
      }, 10); // Adjust the scrolling speed as needed
    };

    // Start scrolling when component mounts
    startScrolling();

    // Cleanup function to stop scrolling when component unmounts
    return () => clearInterval(scrollIntervalRef.current);
  }, [contentWidth, scrollPosition]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      onContentSizeChange={(width, height) => setContentWidth(width)}
    >
      {children}
    </ScrollView>
  );
};


const Home = () => {
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
  useEffect(() => {
    const retrieveData = async () => {
      const key = 'user'
      try {
        const value = await AsyncStorage.getItem(key);
        if (value === null) {
          router.push('/components/login')
        }
      } catch (error) {
        console.log('Error retrieving data:', error);
      }
    };

    retrieveData();
  }, []);
  
  return (
    <View style={Styles.container}>
      <View style={Styles.sub1}>
        {/* <ImageBackground source={require('../../assets/.png')}  resizeMode='cover'></ImageBackground> */}
        <Image 
          source={require('../../assets/banner.jpg')} 
          style={Styles.banner}
        />
      </View>
      <ScrollView>
        <View style={Styles.h1}>
            <View style={Styles.h11}>
              <Text style={Styles.update}>Flash New</Text>
            </View>
            <View style ={Styles.h12}>
            <AutoScrollingHorizontalScrollView>
              <Text style={{ fontSize: 15,color:'white'}}>This is a horizontally scrolling text. this is the new college mobile app developing by our techpros team</Text>
            </AutoScrollingHorizontalScrollView>
              {/* <ScrollView horizontal={true}>
                    <Text style={{ fontSize: 15,color:'white'}}>This is a horizontally scrolling text. this is the new college mobile app developing by our techpros team</Text>
              </ScrollView> */}
            </View>
        </View>
        {/* <Text></Text> */}
        <View style={Styles.h2}>
        <Image
                source={require('../../assets/ban2.jpg')}
                style={Styles.ban1}
              />
        </View>
        <View style={Styles.h3}>
          <View style={{height:'9%',alignItems:'center' ,justifyContent:'center' ,}}>
            <View style = {Styles.flash}>
              <Text style={{fontSize:20,color:'white'}}>Updates</Text>
            </View>
          </View>
          <View style={{height:'100%',borderTopColor:'#f4f2ee',borderTopWidth:10,alignItems:'center',justifyContent:'center'}}>
              <View style={Styles.updtflash}>
                <View style={Styles.updtflash1}>
                  {/* <Text>frytugyihjonklmewrgthrguojn</Text> */}
                </View>
                <View style={Styles.updtflash2}>
                  <View style={{height:'70%',width:'95%',backgroundColor:'#f4f2ee',borderRadius:5,padding:5}}>
                  <Text>Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024Read
Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024</Text>
                  </View>
                </View>
              </View>
              <View style={Styles.updtflash}>
              <View style={Styles.updtflash1}>
                  {/* <Text>frytugyihjonklmewrgthrguojn</Text> */}
                </View>
                <View style={Styles.updtflash2}>
                  <View style={{height:'70%',width:'95%',backgroundColor:'#f4f2ee',borderRadius:5,padding:5}}>
                    <Text>Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024Read
Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024</Text>
                  </View>
                </View></View> 
              <View style={Styles.updtflash}>
              <View style={Styles.updtflash1}>
                  {/* <Text>frytugyihjonklmewrgthrguojn</Text> */}
                </View>
                <View style={Styles.updtflash2}>
                  <View style={{height:'70%',width:'95%',backgroundColor:'#f4f2ee',borderRadius:5,padding:5,}}>
                  <Text>Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024Read
Revaluation / Script Viewing Notification for B.Tech - III Semester End Examinations Supple (AR20,AR19&AR17) - FEB 2024</Text>
                  </View>
                </View>
              </View>
          </View>
          
        </View>
        <View style={{height:300,}}>
          <View style={Styles.t1}>
            <View style= {{height:'70%',width:'60%',backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:5}}>
              <Text style={{color:'white',fontSize:20}}>Technical Hub</Text>
            </View>
          </View>
          <View style={Styles.t2}>
            <View style = {Styles.thub}>
              <Image source={require('../../assets/thub1.png')} style={Styles.thub1}/>
            </View>
          </View>
        </View>
        <View style= {Styles.h4}>
          <View style={{height:'20%',alignItems:'center',justifyContent:'center'}}>
            <View style={{height:'65%',width:'60%',backgroundColor:'#ff6900',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Placements</Text>
            </View>
            
          </View>
          <View style={{height:'80%',alignItems:'center',justifyContent:'center', }}>
            <View style={Styles.placement}>
              <Image
              source={require('../../assets/placement.jpg')}
              style={{height:'100%',width:'100%'}}
              
              />
            </View>
          </View>
        </View>
        <View style={{height:1200,}}>
          <View style={Styles.rank}>
            <View style={{height:'90%',width:'60%',backgroundColor:'#ff6900',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold',}}>Rankings/Accredation</Text>
            </View>
          </View>
          <View style={Styles.rank1}>
          <View style={Styles.card}>
            <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={require('../../assets/naac.png')}/>
          </View>
          <View style={Styles.card}>
          <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={require('../../assets/nba.png')}/>
          </View>
          <View style={Styles.card}>
          <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={require('../../assets/s.png')}/>
          </View>
          <View style={Styles.card}>
          <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={require('../../assets/ranl.png')}/>
          </View>
          </View>
        </View>
        
      </ScrollView>
      <View style={Styles.sub11}>
                <Pressable
                    onPress={()=>{router.push('/components/fullprofile')}}
                >
                    <Image
                    source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }}
                    style={[Styles.img1]}
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
                    style={Styles.focus}
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
                    onPress={()=>{router.push('/components/studentsettings')}}
                >
                    <Image
                    source={require('../../public/settings.png')}
                    style={Styles.icon}
                    />
                </Pressable>
            </View>
    </View>
  );
};

export default Home;