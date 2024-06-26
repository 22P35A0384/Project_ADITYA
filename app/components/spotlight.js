import React, { useEffect, useRef, useState } from "react";
import { Text, View, Image, Pressable, TouchableOpacity, Alert, Button } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import Buttons from "./buttion.js";
import axios from 'axios';
import { Platform } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import LottieView from 'lottie-react-native'; // Import LottieView
import CustomModal from "./spotlightresult.js";
import { router } from "expo-router";
import Styles from '../styles/spotlightstyles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Barcodescan from "./barcodescaner.js";
import AWS from 'aws-sdk';
import { Buffer } from 'buffer';
// import { Buffer } from 'react-native-crypto';

AWS.config.update({
    region: 'us-east-1',
    credentials: {
      accessKeyId: 'AKIA6AETHQKEYTIKH6H6',
      secretAccessKey: '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'
    }
});

const rekognition = new AWS.Rekognition();

rekognition.listCollections({}, (err, data) => {
    if (err) console.error('Error listing collections:', err);
    else console.log('Collections:', data.CollectionIds);
});

const dynamodb = new AWS.DynamoDB();

const Spotlight = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false); // State for loading animation
    const cameraRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                const imageDataUrl = await convertImageToDataUrl(data.uri);
                setImage(imageDataUrl);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const SetImageNull = () => {
        setImage(null);
    }

    const sendImageToBackend = async () => {
        try {
            setLoading(true); // Show loading animation
            const imageDataUrl = image.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
            // const imageBuffer = Buffer.from(imageDataUrl, 'base64');
            // const response1 = await axios.post('http://localhost:5000/capture_image',{imageDataUrl});
            // const imageBuffer = response1.data
            // console.log(response1.data.data.data)
            const params = {
                CollectionId: 'gangadhar_jami',
                Image: {
                  Bytes:Buffer.from(imageDataUrl,'base64'),
                },
            };
            const response = await rekognition.searchFacesByImage(params).promise();
            for (const match of response.FaceMatches) {
                const face = await dynamodb.getItem({
                    TableName: 'gangadhar_jami',
                    Key: { RekognitionId: { S: match.Face.FaceId } },
                }).promise();
                if (face.Item) {
                    const email = face.Item.FullName.S;
                    // Alert.alert(email)
                    console.log(email)
                    setModalImageUrl(email);
                    setModalVisible(true);
                  }
            }
            // console.log('done')
            // Alert.alert('testing')
            // console.log(response.data)
            // setModalImageUrl(response.data);
            // setModalVisible(true);
        } catch (error) {
            console.error('Error sending image to backend:', error.message);
        } finally {
            setLoading(false); // Hide loading animation
        }
    };
    
    const convertImageToDataUrl = async (imageUri) => {
        try {
            if (Platform.OS === 'web') {
                return convertImageToDataUrlForWeb(imageUri);
            } else {
                const resizedImage = await ImageManipulator.manipulateAsync(imageUri, [], { compress: 0.5 });
                const base64 = await FileSystem.readAsStringAsync(resizedImage.uri, { encoding: FileSystem.EncodingType.Base64 });
                const imageDataUrl = `data:image/jpeg;base64,${base64}`;
                return imageDataUrl;
            }
        } catch (error) {
            console.error('Error converting image to data URL:', error);
            throw error;
        }
    };
    
    
    const convertImageToDataUrlForWeb = async (imageUri) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', imageUri, true);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(xhr.response);
                } else {
                    reject(new Error('Failed to fetch image'));
                }
            };
            xhr.onerror = reject;
            xhr.send();
        });
    };
    
    const Testingapi=()=>{
        try{
            axios.get('https://space-club.onrender.com/testing').then((res)=>{
                Alert.alert(res.data)
            })
        }catch(err){
            console.log(err)
        }
    }
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

    return (
        <>
            <View style={Styles.container}>
                {!loading && (
                    <>
                        <View style={Styles.banner}>
                            <Image
                                source={require('../../assets/topbanner.jpg')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <View style={Styles.sub2}>
                            {!image ?
                                <Camera
                                    style={Styles.camera}
                                    ref={cameraRef}
                                >
                                    <Text></Text>
                                </Camera>
                                :
                                <Image
                                    source={{ uri: image }}
                                    style={Styles.camera}
                                />
                            }
                        </View>
                        {!image ?
                            <View style={{alignItems:'center'}}>
                                <View style={Styles.sub3}>
                                    <Buttons icon='camera' onPress={takePicture} />
                                </View>
                                <Text></Text>
                                <View style={{width:150, alignItems:'center'}}>
                                    <Button onPress={()=>{router.push('/components/barcodescaner')}} title="Scan Bar Code"/>
                                </View>
                                {/* <Barcodescan/> */}
                            </View>
                            :
                            <View>
                                <TouchableOpacity style={Styles.get} onPress={sendImageToBackend}>
                                    <Text style={{ color: 'white' }}>GET DETAILS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.get} onPress={SetImageNull}>
                                    <Text style={{ color: 'white' }}>Retake Picture</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </>
                )}
            </View>
            <CustomModal visible={modalVisible} roll={modalImageUrl ? modalImageUrl : ''} onClose={() => setModalVisible(false)} />
            {loading && (
                <View style={Styles.loadingContainer}>
                    <LottieView
                        source={require('../../assets/face.json')}
                        autoPlay
                        loop
                        style={{width:'100%',height:"100%"}}
                    />
                </View>
            )}
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
                    style={Styles.focus}
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
    );
};

export default Spotlight;
