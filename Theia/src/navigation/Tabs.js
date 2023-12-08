import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import { CameraButton } from '../camera/CameraButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraView from '../camera/CameraView';
import FeedScreen from '../screens/FeedScreen';

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
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
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
      <Tab.Screen
        name="Navigation"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Navigation',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="navigation" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;