import * as React from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default function Buttons({tittle,onPress,icon,color}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={56} color={color ? color : '#f1f1f1'}/>
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height:60,
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:'#f1f1f1',
        marginLeft:10
    }
})