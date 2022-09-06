import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../../data/posts';
import ButtomTabs, {buttomTabsIcons} from '../components/home/ButtomTabs';
import Tabs from '../components/home/Tabs';
const HomeScreen = ({navigation}) => {
  const Home =
    'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png';
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post props={post} key={index} />
        ))}
      </ScrollView>
      {/* <ButtomTabs icons={buttomTabsIcons}  /> */}
      {/* <Tabs  navigation={navigation}/> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
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
