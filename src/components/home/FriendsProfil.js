import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfilBody, {ProfilBotton} from './ProfilBody';
import {FriendsProfilData} from '../../../data/videoData';
const FriendsProfil = ({route, navigation}) => {
  const {name, profilImage, follow, post, followers, following} = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={{fontSize: 20, color: 'black'}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}>
            {name}
          </Text>
          <Feather
            name="more-vertical"
            style={{fontSize: 20, color: 'black'}}
          />
        </View>
      </View>
      <ProfilBody
        name={name}
        profilImage={profilImage}
        post={post}
        followers={followers}
        follow={follow}
        following={following}
      />
      <ProfilBotton id={1} />
      <Text style={{paddingVertical: 10, fontSize: 15, fontWeight: 'bold'}}>
        Suggeseted for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 10}}>
        {name === FriendsProfil.name
          ? null
          : FriendsProfilData.map((data, index) => {
              const [isFolow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: '#DEDEDE',
                        borderRadius: 2,
                        position: 'relative',
                      }}>
                      <TouchableOpacity onPress={() =>setClose(true)}
                        style={{position: 'absolute', top: 10, right: 10}}>
                        <AntDesign
                          name="close"
                          style={{fontSize: 20, color: 'black', opacity: 0.5}}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profilImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {data.name}
                      </Text>
                      <Text style={{fontWeight: 'bold'}}>
                        {data.accountName}
                      </Text>
                      <TouchableOpacity onPress={()=>setIsFollow(!isFolow) }
                        style={{width: '80%', paddingVertical: 10}}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFolow ? null : '#3493D9',
                            borderWidth: isFolow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent:'center',
                            alignItems:'center'
                          }}>
                          <Text style={{color: isFolow ? 'black' : 'white'}}>
                            {isFolow ? 'following' : 'follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default FriendsProfil;
