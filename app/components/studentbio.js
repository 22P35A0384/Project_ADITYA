import { router } from 'expo-router';
import { Button, Text, View, Modal, Image,StyleSheet } from 'react-native'

const Studentbio = ({visible, onClose,Data}) =>{
    return(
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style ={styles.banner}>
                <Image
                    source={require('../../assets/topbanner.jpg')}
                    style={{width:'100%',height:'100%'}}
                />
            </View>
             <View style={{backgroundColor:"white", flex:1,alignItems:'center'}}>
                <Text>Bio Data</Text>
                <View style={{width:250,
                            height:320,
                            borderRadius:50,}}>
                    <Image
                        source={{uri:`https://info.aec.edu.in/${Data ? Data.clg : '' }/StudentPhotos/${Data ? Data.Roll_No : ''}.jpg`}}
                        style={{
                            width:'100%',
                            height:'100%',
                            borderRadius:20,
                        }}
                    />
                </View>
                <Text>{Data ? Data.Student_Name : ''}</Text>
                <Text>{Data ? Data.Roll_No : ''}</Text>
                <Text>{Data ? Data.Branch : ''}</Text>
                <Text>{Data ? Data.clg : ''}</Text>
                <Text>{Data ? Data.Semester : ""}</Text>
                <Text>{Data ? Data.Mobile_No : ''}</Text>
                <Text>{Data ? Data.E_mail : ''}</Text>
                <Button title='Return' onPress={onClose}/>
            </View>
        </Modal>
    )
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
      bottom:115,
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

export default Studentbio;