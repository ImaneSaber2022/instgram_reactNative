import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import headerlogo from '../../../assetes/images/headerlogo.png';
import plus from '../../../assetes/images/plus.png';
import heart from '../../../assetes/images/heart.png';
import msssgn from '../../../assetes/images/msssgn.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={headerlogo} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.iconsCantainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image source={plus} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity >
            {/* <View style={styles.unreadBadge}><Text style={styles.unreadbadgetext}>11</Text></View> */}
          <Image source={heart} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={msssgn} style={styles.icon1} resizeMode="contain" />
        </TouchableOpacity>
       
        
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  iconsCantainer: {flexDirection: 'row'},
  logo: {
    width: 120,
    height: 50,
  },
  icon:{
    width:20,
    height:20,
    marginLeft:10,
    marginTop:4
    
  },
  icon1:{
    width:35,
    height:35,
    marginLeft:10
  },
  unreadBadge: {
    backgroundColor:'#FF3250',
    position:'absolute',
    left:20,
    buttom:18,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
  },
  unreadbadgetext:{
    color:'white',
    fontWeight:'600',
    
  },
});
