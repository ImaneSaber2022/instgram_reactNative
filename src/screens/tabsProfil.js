import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Profil from './Profil';
import Search from './Search';
import Reels from './Reels';
import Notification from './Notification';
import SplashScreen from './SplashScreen';
import NewPostScreen from './NewPostScreen';
import Login from './Login';
import SignupScreen from './SignupScreen';
import ForgetPassword from './ForgetPassword';
import FriendsProfil from '../components/home/FriendsProfil';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline';
          }
          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

const TabsProfil = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="FriendsProfil" component={FriendsProfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabsProfil;
