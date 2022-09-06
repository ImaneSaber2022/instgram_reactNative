import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import imgArrow from '../../assetes/images/imgArrow.png';
import threedots from '../../assetes/images/threedots.jpg';
import userProfil from '../../assetes/images/userProfil.png';
import buttomArroow from '../../assetes/images/buttomArroow.png';
import Tabs from '../components/home/Tabs';
const Profil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
            <Image
              source={imgArrow}
              style={{width:20,height:20,marginTop:5}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Imane</Text>
        </View>
        <View style={styles.img}>
          <TouchableOpacity>
            <Image
              source={threedots}
              style={styles.img}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.ProfilSectionWrapper}>
          <View style={styles.ImageSection}>
            <Image
              style={styles.instaImageBorder}
              source={require('../../assetes/images/circle.png')}
            />
            <Image
              style={styles.userImage}
              source={require('../../assetes/images/img5.jpg')}
            />
            <Text style={[styles.userName,{color:'#fff'}]}>Imane</Text>
          </View>
          <View style={styles.followrsCountSection}>
            <View style={styles.followingCount}>
              <View>
                <Text style={styles.countTitle}>334</Text>
                <Text style={styles.countSubTitle}>Posts</Text>
              </View>
              <View>
                <Text style={styles.countTitle}>211K</Text>
                <Text style={styles.countSubTitle}>Followrs</Text>
              </View>
              <View>
                <Text style={styles.countTitle}>134</Text>
                <Text style={styles.countSubTitle}>Following</Text>
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.messageButtonWrapper}>
                <Text style={styles.messageText}>Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonItemsWrapper}>
                <Image
                  style={styles.buttonIcon}
                  source={userProfil}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonItemsWrapper}>
                <Image
                  style={{width: 30, height: 30}}
                  source={buttomArroow}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.moreInfoWrraper}>
          <Text style={styles.introText}>
            Discovering Stories Around the world
          </Text>
          <Text style={styles.urlText}>www.Imane.com</Text>
        </View>
        <ScrollView style={styles.storiesWrraper} horizontal={true}>
          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img7.jpg')}
            />
            <Text style={styles.storyProName}>Imane 1</Text>
          </View>

          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img8.jpg')}
            />
            <Text style={styles.storyProName}>Imane 2</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img14.jpg')}
            />
            <Text style={styles.storyProName}>Imane 3</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img9.jpg')}
            />
            <Text style={styles.storyProName}>Imane 4</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img10.jpg')}
            />
            <Text style={styles.storyProName}>Imane 5</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require('../../assetes/images/img12.jpg')}
            />
            <Text style={styles.storyProName}>Imane 5</Text>
          </View>
        </ScrollView>
        <View style={styles.viewIconWrraper}>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../assetes/images/gridview.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../assetes/images/listViewProfil.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../assetes/images/profilPlus.png')}
            />
          </TouchableOpacity>
        </View>
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
        </ScrollView>
      </ScrollView>
      {/* <View style={{backgroundColor:'#000'}}>
        <Tabs navigation={navigation} />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor:'#000'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ABB2B9  ',
    borderWidth: 1,
    backgroundColor: '#ABB2B9 ',
    padding: 12,
  },
  img: {
    width: 30,
    height: 25,
    
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color:'#fff',
    marginLeft:4
  
  },
  ProfilSectionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageSection: {
    display: 'flex',
    flex: 1,
    padding: 5,
  },
  followrsCountSection: {
    display: 'flex',
    flex: 2,
  },
  instaImageBorder: {
    width: 90,
    height: 90,
  },
  userImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 70,
    margin: 10,
  },
  followingCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  messageButtonWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: '60%',
    padding: 5,
  },
  ButtonItemsWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B2BABB',
    padding: 4,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  messageText: {
    fontWeight: '700',
    textAlign: 'center',color:'#fff'
  },
  countTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color:'#fff'
  },
  countSubTitle: {
    color: 'gray',
    textAlign: 'center',
  },
  userName: {
    fontSize: 19,
    fontWeight: '700',
    //textAlign: 'center',
    marginLeft: 10,
  },
  moreInfoWrraper: {
    marginLeft: 15,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    color:'#fff'
  },
  urlText: {
    color: '#85C1E9',
  },
  storiesImage: {
    borderRadius: 75,
    width: 70,
    height: 70,
    borderColor: 'gray',
    borderWidth: 3,
    marginRight: 20,
  
  },
  storiesWrraper: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  storyProName: {
    textAlign: 'center',
    color:'#fff'
  },
  viewIconWrraper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 8,
  },
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
});
export default Profil;
