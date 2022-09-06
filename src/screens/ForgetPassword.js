import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const INSTAGRAM_LOGO =
  'https://trendy-ad.com/wp-content/uploads/2020/06/computer-icons-instagram-logo-sticker-png-favpng-LZmXr3KPyVbr8LkxNML458QV3-removebg-preview.png';
const ForgetPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}} />
      </View>
      <View style={[styles.inputField, {marginTop: 50}]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Nouveau password"
          placeholderTextColor="gray"
        />
      </View>
      
      <View style={styles.inputField}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Confirmer password"
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',padding:15 ,backgroundColor:'#6BB0F5',marginTop:10
          }}>
          <Text style={{color: '#ccc'}}>
            Log In
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems:'center',marginTop:'50%'}}><Text style={{color:'white'}}>from</Text>
      <Text style={{color:'white'}}>Facebook</Text></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  inputField: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default ForgetPassword;
