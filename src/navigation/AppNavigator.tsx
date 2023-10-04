import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Icon} from '@rneui/themed';

const {Navigator, Screen} = createBottomTabNavigator();
const AwesomeIcon = () => (
  <Icon type="material" name="autorenew" color="#00aced" />
);

function AppNavigator() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: AwesomeIcon,
        }}
        component={ProfileScreen}
      />
    </Navigator>
  );
}

export default AppNavigator;
