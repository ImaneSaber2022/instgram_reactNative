import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewPostScreen from './src/screens/NewPostScreen';
import Login from './src/screens/Login';
import SignupScreen from './src/screens/SignupScreen';
import Search from './src/screens/Search';
import SplashScreen from './src/screens/SplashScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import Profil from './src/screens/Profil';
import TabsProfil from './src/screens/tabsProfil';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabsProfil"
        screenOptions={screenOptions}>
            <Stack.Screen name="TabsProfil" component={TabsProfil} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
     
      
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// export const SignedOutStack = () => {
//   return(
//     <NavigationContainer>
//     <Stack.Navigator
//       initialRouteName="Login"
//       screenOptions={screenOptions}>

//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="SignupScreen" component={SignupScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   )
// }

export default SignedInStack;
