import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SearchContent = () => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../../assetes/images/img12.jpg'),
        require('../../../assetes/images/img13.jpg'),
        require('../../../assetes/images/img5.jpg'),
        require('../../../assetes/images/img21.jpg'),
        require('../../../assetes/images/img22.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../../assetes/images/img13.jpg'),
        require('../../../assetes/images/img13.jpg'),
        require('../../../assetes/images/img13.jpg'),
        require('../../../assetes/images/img13.jpg'),
        require('../../../assetes/images/img13.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../../assetes/images/img5.jpg'),
        require('../../../assetes/images/img5.jpg'),
        require('../../../assetes/images/img5.jpg'),
        require('../../../assetes/images/img5.jpg'),
        require('../../../assetes/images/img5.jpg'),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return ( 
        <>
        {data.id === 0 ? 
        <View style={{
            flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between'
        }}>
            {
            data.images.map((imageDta, imageIndex) => {
                return (
                    <TouchableOpacity style={{paddingBottom:2}}>
                        <Image source={imageDta} style={{width:129,height:150}} />
                    </TouchableOpacity>
                )
            })
            }</View> : null}</>);
      })}
    </View>
  );
};

export default SearchContent;
