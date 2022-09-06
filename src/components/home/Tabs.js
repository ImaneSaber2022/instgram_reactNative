import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'

const Tabs = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
      <Image
        style={styles.galeryImage}
        source={{
          uri: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.push('Search')}>
      <Image
        style={styles.galeryImage}
        source={{
          uri: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/search--v1.png',
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.galeryImage}
        source={{
          uri: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.galeryImage}
        source={{
          uri: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.push('Profil')}>
      <Image
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 35,
          width: 25,
          margin: 1,
          borderRadius: 35,
        }}
        source={{uri: 'https://picsum.photos/id/1011/5472/3648'}}
      />
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    galeryImage: {
      display: 'flex',
      flexDirection: 'row',
      height: 35,
      width: 35,
      margin: 1,
    },
  });
export default Tabs