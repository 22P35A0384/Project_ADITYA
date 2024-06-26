import { StyleSheet,Platform } from "react-native";

const Loginstyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f2ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 150,
        width: 250,
        position: 'relative',
        bottom: 20, // Adjust this value as needed  
    },
    loginblock:{
        // marginTop:'30%',
        padding:20,
        backgroundColor:'white',
        width:'70%',
        borderRadius:20,
        ...Platform.select({
            android:{
                elevation:6,
            }
        })
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    btn:{
        marginTop: 20,
        backgroundColor: 'red', // Example background color
        borderRadius: 5, // Example border radius
    }
})

export default Loginstyles;