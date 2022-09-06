import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Splashinsta from '../../assetes/images/splashinsta.png';
import {useNavigation} from '@react-navigation/native';
const INSTAGRAM_LOGO =
  'https://trendy-ad.com/wp-content/uploads/2020/06/computer-icons-instagram-logo-sticker-png-favpng-LZmXr3KPyVbr8LkxNML458QV3-removebg-preview.png';
const SplashScreen = () => {
  const Navigation = useNavigation();

  setTimeout(() => {
    Navigation.navigate('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}} />
      </View>
      <View>
        <Text style={{color: '#fff', textAlign: 'center'}}>from</Text>
        <Text style={{color: '#fff', textAlign: 'center'}}>facebbok</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
