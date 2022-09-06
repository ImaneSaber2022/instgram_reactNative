import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import imgArrow from '../../../assetes/images/imgArrow.png';
import Ionic from 'react-native-vector-icons/Ionicons';
const SearchBar = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
      }}>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#909090'}
        style={{
          width:'94%',
          backgroundColor: '#EBEBEB',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      />
      {/* <View style={{marginTop:5}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => <View style={{marginLeft: 10}}></View>}
        renderRighttButton={() => (
          <View style={{flexDirection: 'row', marginRight: 8}}>
            <AntDesign name="clockcircle" size={11} />
            <Text style={{color: 'red'}}>search</Text>
          </View>
        )}
      />
      </View> */}
    </View>
  );
};

export default SearchBar;
