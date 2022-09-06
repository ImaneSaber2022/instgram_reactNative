import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from '../../../data/videoData';
import SingleReel from '../../screens/SingleReel';
const ReelsComponent = () => {

    const [currentIndex,setCurrentIndex] = useState(0)
    const handleChangeIndexValue = ({index}) => {
        setCurrentIndex(index);

    };
  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={(item, index) => {
      <SingleReel item={item} index={index} currentIndex={currentIndex}/>}}
      keyExtractor={(item,index) => index}
    />
  );
};

export default ReelsComponent;
