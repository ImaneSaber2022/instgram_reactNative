import {View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import React, {useState} from 'react';
import {USERS} from '../../../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <Text style={{color:'#ccc', marginLeft:4,marginBottom:2}}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index}style={{alignItems:'center'}}>
            <Image source={{uri:story.image}} style={styles.story} />
            <Text style={{color: 'white'}}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + '...'
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});

export default Stories;
