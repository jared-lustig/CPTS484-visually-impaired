import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraView from '../camera/CameraView';


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      inactiveColor="#95a5a6"
      barStyle={{ backgroundColor: '#e91e63' }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#b3caf5',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="navigation" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraView}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;