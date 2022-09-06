import {View, Text,Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../components/home/ReelsComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Reels = () => {

    const windowwidth= Dimensions.get('window').width
    const windowheight= Dimensions.get('window').height

  return (
    <View style={{width:windowwidth, height:windowheight,backgroundColor:'black',position:'relative',marginLeft:5}}>
      <View style={{position:'absolute',top:0,left:0,right:0,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
            reels
        </Text>
        <Feather name='camera' style={{fontSize:25,marginRight:10,color:'white'}}  />
      </View>
      <ReelsComponent />
     
    </View>
  );
};

export default Reels;
