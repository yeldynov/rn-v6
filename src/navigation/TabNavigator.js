import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import { Ionicons, Feather } from '@expo/vector-icons';
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// To show Game Details Screen on Click in the home
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name='Home'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={GameDetailsScreen}
        name='GameDetails'
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#ad40af' },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}
    >
      <Tab.Screen
        name='Home2'
        // component={HomeScreen}
        component={HomeStack} // Stack in Tab!
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#ad40af',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'yellow' },
          tabBarIcon: ({ color, size }) => (
            <Feather name='shopping-cart' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'GameDetails') return 'none';
  else return 'flex';
};

export default TabNavigator;
