import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";

const Logout = () => {

  useEffect(() => {
    const removeUserData = async () => {
      try {
        await AsyncStorage.removeItem('user');
        console.log('Data removed successfully!');
        // Navigate to the login screen after removing user data
        router.push('/components/login');
      } catch (error) {
        console.log('Error removing data:', error);
      }
    };

    // Call the function to remove user data when the component mounts
    removeUserData();
  }, []); // Dependency array to ensure navigation is included in the effect dependencies

  // Since useEffect handles side effects, the component's return value can be null
  return null;
};

export default Logout;
