import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Text>Beans</Text>
    </Tab.Navigator>
  )
}