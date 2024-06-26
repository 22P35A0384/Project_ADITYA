import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, Pressable, TextInput, Alert, FlatList, TouchableOpacity } from "react-native";
import Styles from '../styles/messengerstylings.js';
import { router } from "expo-router";
import Permissions from 'expo-permissions'
// import { Speech } from 'expo-speech';
import AWS from 'aws-sdk';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';


AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'AKIAYS2NVLJLGUFIFMVQ',
        secretAccessKey: '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'
    }
});

const lexruntime = new AWS.LexRuntime();

const Messenger = () => {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    // useEffect(() => {
    //     Speech.requestPermissionsAsync();
    // }, []);
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

    const handleVoiceInput = async () => {
        try {
            // const { status } = await Speech.requestPermissionsAsync();
            const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
            status = 'granted'
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Please allow microphone access to use voice input.');
                return;
            }
            
            const { uri } = await Speech.recordAsync();
            console.log('Recorded URI:', uri); // Log the URI
            const { transcription } = await Speech.recognizeAsync({ uri });
            console.log('Transcription:', transcription); // Log the transcription
            setUserInput(transcription);
        } catch (error) {
            console.error('Speech input failed:', error);
            Alert.alert('Error', 'Failed to recognize speech');
        }
    };
    
    

    const sendMessage = () => {
        const params = {
            botAlias: 'aichatbot',
            botName: 'aditya',
            inputText: userInput,
            userId: '0f3cd6765c4beea01b7981a36d181784bac522ec2d8258c606e8b2233e9aa2a6'
        };

        lexruntime.postText(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                // Handle error appropriately, e.g., show error message to user
                Alert.alert('Error', 'Failed to get response from bot');
            } else {
                // Update chat messages
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'user', text: userInput },
                    { type: 'bot', text: data.message }
                ]);
                // Clear user input
                setUserInput('');
            }
        });
    };
    const flatListRef = useRef();

    useEffect(() => {
        // Scroll to the bottom when chatMessages change
        flatListRef.current.scrollToEnd({ animated: true });
    }, [chatMessages]);

    return (
        <>
            <View style={Styles.container}>
                <View style={Styles.div}>
                    <View style={Styles.aiicon}>
                        <Image
                            source={require('../../assets/bot1.jpg')}
                            style={Styles.gpts}
                        />
                    </View>
                    <View style={Styles.AI}>
                        <Text style={Styles.chpt}>AI Chat BoT</Text>
                    </View>
                </View>

                <FlatList
                    ref={flatListRef}
                    data={chatMessages}
                    keyExtractor={(item, index) => index.toString()}
                    style={Styles.body1}
                    renderItem={({ item }) => (
                        <View style={[Styles.chatContainer, { justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start' }]}>
                        <View style={[Styles.chatBubble, { backgroundColor: item.type === 'user' ? '#DCF8C6' : '#F0F0F0' }]}>
                            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? '#006400' : '#FF0000' }}>
                            {item.type === 'user' ? 'You' : 'Bot'}
                            </Text>
                            <Text style={Styles.chatText}>{item.text}</Text>
                        </View>
                        </View>
                    )}
                />

                <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 50, marginLeft: 10, margin: 10, paddingRight:30 }}>
                    <View style={Styles.text_}>
                        <TextInput
                            style={Styles.input}
                            value={userInput}
                            onChangeText={text => setUserInput(text)}
                            placeholder="Ask Me Anything"
                        />
                    </View>
                    <View style={Styles.b}>
                        <Pressable style={Styles.button} onPress={sendMessage}>
                            <Image
                                source={require('../../assets/arrow.png')}
                                style={Styles.ar}
                            />
                        </Pressable>
                    </View>
                    <View style={Styles.b}>
                        <TouchableOpacity style={Styles.button} onPress={handleVoiceInput}>
                            <Image
                                source={require('../../assets/voice.png')}
                                style={Styles.ar}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={Styles.sub1}>
                <Pressable onPress={() => { router.push('/components/fullprofile') }}>
                    <Image
                        source={{ uri: `https://space-club.onrender.com/adityaimg/${user}` }}
                        style={[Styles.img]}
                    />
                </Pressable>
                {/* <Pressable onPress={() => { router.push('/components/spotlight') }}>
                    <Image
                        source={require('../../public/face.png')}
                        style={Styles.icon}
                    />
                </Pressable> */}
                <Pressable onPress={() => { router.push('/components/studenthome') }}>
                    <Image
                        source={require('../../public/home.png')}
                        style={Styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => { router.push('/components/studentmessenger') }} style={Styles.focus}>
                    <Image
                        source={require('../../public/msg.png')}
                        style={Styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => { router.push('/components/studentsettings') }}>
                    <Image
                        source={require('../../public/settings.png')}
                        style={Styles.icon}
                    />
                </Pressable>
            </View>
        </>
    );
};

export default Messenger;