import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../tabs/Profile';
import Search from '../tabs/Search';
import Settings from '../tabs/Settings';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;
          
          if (route.name === "Profile") {
            iconComponent = <FontAwesome name="user" size={size} color={focused ? "#ff6347" : "#bbb"} />;
          } else if (route.name === "Search") {
            iconComponent = <FontAwesome name="search" size={size} color={focused ? "#ff6347" : "#bbb"} />;
          } else if (route.name === "Settings") {
            iconComponent = <Ionicons name="settings" size={size} color={focused ? "#ff6347" : "#bbb"} />;
          }

          return iconComponent;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
            {route.name}
          </Text>
        ),
      })}
      backBehavior="history"
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingBottom: 8,
    paddingTop: 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#bbb', // Default text color
    textTransform: 'uppercase',
  },
  activeTabLabel: {
    color: '#ff6347', // Change text color when active (Tomato color)
  },
});

export default HomeScreen;
