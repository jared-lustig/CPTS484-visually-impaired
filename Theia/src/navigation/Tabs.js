import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import { CameraButton } from '../camera/CameraButton';
import { PaperProvider } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
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
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../../assets/favicon.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CameraButton {...props} />
          )
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