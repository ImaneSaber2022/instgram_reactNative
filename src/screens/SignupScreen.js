import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/singupScreen/SignupForm'
const INSTAGRAM_LOGO ='https://trendy-ad.com/wp-content/uploads/2020/06/computer-icons-instagram-logo-sticker-png-favpng-LZmXr3KPyVbr8LkxNML458QV3-removebg-preview.png'

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri:INSTAGRAM_LOGO, width:100,height:100 }}/>
      </View>
     <SignupForm  navigation={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor:'#000',
   paddingTop:50,
   paddingHorizontal:12,
   },
   logoContainer:{
    alignItems:'center',
    marginTop:60,
    
   }
})
export default SignupScreen