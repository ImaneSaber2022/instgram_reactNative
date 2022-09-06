import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FormikPostUPloader from './FormikPostUPloader';
const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header  navigation={navigation}/>
      <FormikPostUPloader  navigation={navigation}/>
    </View>
  );
};
const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
      <Text style={styles.headertext}> New Post</Text>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
  },
  headertext: {color: '#fff',
   fontWeight: '700', 
   fontSize: 20,
    right: 23},
});
export default AddNewPost;
