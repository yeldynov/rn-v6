import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import CustomDrawer from '../components/CustomDrawer';

// import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'noto-regular',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        component={TabNavigator}
        name='Home'
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name='home' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfileScreen}
        name='Profile'
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={MessagesScreen}
        name='Messages'
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name='envelope-o' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={MomentsScreen}
        name='Moments'
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='time-outline' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={SettingsScreen}
        name='Setttings'
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
