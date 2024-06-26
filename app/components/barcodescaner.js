import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity,Image } from 'react-native';
import { BarCodeScanner,Camera } from 'expo-camera';
import CustomModal from "./spotlightresult.js";
import { router } from 'expo-router';

const Barcodescan=()=>{
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Camera permission denied');
//       }
//     })();
//   }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    // Alert.alert(`Scanned barcode: ${data}`);
    setModalImageUrl(data);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
        <View style ={styles.banner}>
          <Image
              source={require('../../assets/topbanner.jpg')}
              style={{width:'100%',height:'100%'}}
          />
      </View>
      <View style={styles.sub2}>
        <Camera
            // style={Styles.camera}
            onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
      </View>
      <TouchableOpacity style={styles.get} onPress={()=>{router.push('/components/spotlight')}}><Text style={styles.scanStatus}>Return</Text></TouchableOpacity>
      <CustomModal visible={modalVisible} roll={modalImageUrl ? modalImageUrl : ''} onClose={() => {setModalVisible(false),setScanned(false)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scanStatus: {
    // backgroundColor: '#FFFFFF',
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // borderRadius: 10,
    // marginTop: 20,
    fontWeight: 'bold',
    color:'white'
  },
  sub2:{
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    marginTop:'15%',
    marginLeft:'10%',
    marginRight:'10%',
    height:'55%',
    borderRadius:50,
    overflow: "hidden"
    // paddingTop:5,
    // paddingBottom:5,
    // flexDirection:"row",
    // justifyContent: 'space-between',
    // paddingLeft:10,
    // paddingRight:10,
},
banner:{
    position:'relative',
    bottom:80,
    height:'8%',
    backgroundColor:'#f4f2ee'
},
get:{
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:10,
    width:180,
    marginLeft:"28%",
    marginTop:30,
    borderRadius:50
    
}
});

export default Barcodescan;

// import { View,Text } from "react-native";
// const Test=()=>{
//     return(
//         <View>
//             <Text>testing</Text>
//         </View>
//     )
// }

// export default Test;