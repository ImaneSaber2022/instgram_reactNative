import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider, Icon} from 'react-native-elements';
export const buttomTabsIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active:
      'https://img.icons8.com/fluency-systems-filled/144/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
  },
  {
    name: 'Profils',
    active: 'https://picsum.photos/id/1011/5472/3648',
    inactive: 'https://picsum.photos/id/1011/5472/3648',
  },
];

const ButtomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)} >
        <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} style={[styles.icon,styles.profilpic]} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
      <View style={styles.container} >
        {icons.map((icon, index) => {
          return <Icon key={index} icon={icon} />;
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // position:'absolute',
    // width:'100%',
    // bottom:'4%',
    // zIndex:99,
    // backgroundColor:'#000'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {width: 30, height: 30},

  profilpic: {borderRadius:50,
borderColor:'#fff'},
 
});
export default ButtomTabs;
