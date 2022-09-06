/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import SignedInStack from './navigation';
import Profil from './src/screens/Profil';
import SearchBar from './src/components/searchBar/SearchBar';
import TabsProfil from './src/screens/tabsProfil';
const App = () => {
  return (
    <View style={styles.container}>
      <TabsProfil />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //backgroundColor: '#000000',
  },
});

export default App;
