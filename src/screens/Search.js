import {View, Text, ScrollView,StyleSheet,Image} from 'react-native';
import React from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Tabs from '../components/home/Tabs';
import SearchContent from '../components/home/SearchContent';
const Search = ({navigation}) => {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#fff',position:'relative'}}>
      <ScrollView>


       <SearchBar navigation={navigation} />
       <SearchContent />
      </ScrollView>
      {/* <Tabs navigation={navigation} /> /}
      <ScrollView>
          <View style={styles.imagesWrraper}>
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img16.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img12.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img9.jpg')}
            />
          </View>
          <View style={styles.imagesWrraper}>
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img6.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img13.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img5.jpg')}
            />
          </View>
          <View style={styles.imagesWrraper}>
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img20.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img21.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img22.jpg')}
            />
          </View>
          <View style={styles.imagesWrraper}>
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img6.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img13.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img5.jpg')}
            />
          </View>
          <View style={styles.imagesWrraper}>
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img16.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img12.jpg')}
            />
            <Image
              style={styles.galeryImage}
              source={require('../../assetes/images/img9.jpg')}
            />
          </View> */}
        
    </View>
  );
};
const styles = StyleSheet.create({

  imagesWrraper: {
    flexDirection: 'row',
  },
  galeryImage: {
    display: 'flex',
    flexDirection: 'row',
    height: 200,
    width: 125,
    margin: 1,
  },
})
export default Search;
