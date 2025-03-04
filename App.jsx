import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BasicInfo from './RegisterScreens/BasicInfo';
import Education from './RegisterScreens/Education';
import Location from './RegisterScreens/Location';
import OtherInfo from './RegisterScreens/OtherInfo';
import FamilyInfo from './RegisterScreens/FamilyInfo';
import Registration from './RegisterScreens/Registration';
import Contact from './RegisterScreens/Contact';
import LandingScreen from './screens/LandingScreen';
import { SafeAreaView } from 'react-native';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';
import Interests from './components/Interests';
import Payment from './components/Payment';

const Stack =  createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1,
      backgroundColor: "#fff",}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="BasicInfo" component={BasicInfo} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="OtherInfo" component={OtherInfo} />
          <Stack.Screen name="FamilyInfo" component={FamilyInfo} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Bookmarks" component={Bookmarks} />
          <Stack.Screen name="Interests" component={Interests} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>      
      </NavigationContainer>
    </SafeAreaView>
    
  );
};



