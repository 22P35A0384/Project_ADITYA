import React, { useState,useEffect } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import AttendanceBarGraph from './AttendanceBarGraph.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttendanceTable from './AttendanceTable.js';
import Backlogdatatable from './backlogdata.js';
import Styles from '../styles/fullprofilestyles.js';
import { router } from 'expo-router';
import Studentbio from './studentbio.js';

const CustomModal = ({ visible, onClose,roll }) => {
    const [Bio ,setBio] = useState(false)
  // console.log(roll.Rollnumber)
  const attendanceData = [
    { date: '2024-03-18', present: 30, total: 35, percentage: '85.71%' },
    { date: '2024-03-19', present: 28, total: 35, percentage: '80.00%' },
    { date: '2024-03-20', present: 33, total: 35, percentage: '94.29%' },
    { date: '2024-03-21', present: 32, total: 35, percentage: '91.43%' },
    { date: '2024-03-22', present: 31, total: 35, percentage: '88.57%' },
    // More data...
  ];
  const backlogdata = [
    { semester: '1-1', numSubjects: 5, numBacklogs: 0, percentage: '90.71%' },
    { semester: '1-2', numSubjects: 5, numBacklogs: 1, percentage: '70.00%' },
    { semester: '2-1', numSubjects: 5, numBacklogs: 2, percentage: '50.29%' },
    { semester: '2-2', numSubjects: 5, numBacklogs: 3, percentage: '40.43%' },
    { semester: '3-1', numSubjects: 5, numBacklogs: 4, percentage: '30.57%' },
    { semester: '3-2', numSubjects: 5, numBacklogs: 5, percentage: '20.57%' },
    // { date: '3-2', present: 5, total: 5, percentage: '52.00%' },
    // { date: '4-1', present: 5, total: 4, percentage: '63.29%' },
    // { date: '4-2', present: 5, total: 3, percentage: '70.43%' },
  ];
  const [userdata, setuserdata] = useState({})
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //     try {
            
            
    //     } catch (error) {
    //         console.error('Error retrieving user:', error);
    //     }
    //     };

    //     fetchUserData();
    // }, []);
    if(roll){
      // const userFromStorage =  AsyncStorage.getItem('user');
      axios.get(`https://space-club.onrender.com/student/data/${roll}`).then((res)=>{
          setuserdata(res.data)
          // console.log('testing')
          // console.log(res.data)
          console.log(userdata)
      })
    }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style ={Styles.banner}>
          <Image
              source={require('../../assets/topbanner.jpg')}
              style={{width:'100%',height:'100%'}}
          />
      </View>
      <Studentbio visible={Bio} Data={userdata ? userdata : ''} onClose={() => setBio(false)} />
      <View style={{  justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        {roll ? 
        // <ScrollView style={{width:"100%", flex:1}}>
          <View style={{ backgroundColor: 'white', padding: 20,width:"100%",height:'100%', alignItems: 'center' }}>
          {userdata.type_of_user==='admin' ? 
           <View style={Styles.container}>
           {/* <View style ={Styles.banner}>
                <Image
                    source={require('../../assets/topbanner.jpg')}
                    style={{width:'100%',height:'100%'}}
                />
           </View> */}
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
                <TouchableOpacity style={Styles.v11} onPress={()=>{setBio(true)}}>
                    <Text style={Styles.tx}>Bio Data</Text>
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
           <TouchableOpacity onPress={onClose} style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5,marginLeft:100,marginRight:100,alignItems:'center' }}>
           <Text style={{ color: 'white' }}>CLOSE</Text>
         </TouchableOpacity>
        </View>
          :
          <View style={Styles.container}>
          <View style = {Styles.txt}><Text style={Styles.txt1}>Student Profile</Text></View>
          <View style={Styles.v}>
           <View style={Styles.v1}>
               <TouchableOpacity style={Styles.v11} onPress={()=>{setBio(true)}}>
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
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5,marginLeft:100,marginRight:100,alignItems:'center' }}>
           <Text style={{ color: 'white' }}>CLOSE</Text>
         </TouchableOpacity>
       </View>  
        }
        </View>
        /* </ScrollView> */
      :
      ""  
      }
      </View>
    </Modal>
  );
};

export default CustomModal;
