import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {color} from 'react-native-reanimated';

const postFooterIcons = [
  {
    name: 'Like',
    imagUrl:
    require('../../../assetes/images/heartFooter.png'),
    likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like.png ',
  },
  {
    name: 'comment',
    imagUrl:
      require('../../../assetes/images/messagerFooter.png'),
  },
  {
    name: 'Share',
    imagUrl:
    require('../../../assetes/images/envoyerFooter.png'),
  },
  {
    name: 'Save',
    imagUrl:
    require('../../../assetes/images/enregisterFooter.png'),
  },
];

const Post = ({props}) => {
  return (
    <View style={{marginBottom: 30,marginLeft:8}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader props={props} />
      <PostImage props={props} />
      <PostFooter />
      <Likes props={props} />
      <Caption props={props} />
      <CommentsSection props={props} />
      <Comments props={props} />
    </View>
  );
};
const PostHeader = ({props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: props.profile_picture}} style={styles.story} />
        <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
          {props.user}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '500'}}>...</Text>
      </TouchableOpacity>
    </View>
  );
};
const PostImage = ({props}) => {
  console.warn(props)
  return (
    <View style={{width: '100%', height: 300,alignItems:'center'}}>
      <Image
        source={props.imgUrl}
        // source={require('../../../assetes/images/logoHeader.jpg')}
        style={{width: 300, height: 300}}
        // style={{height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
};
const PostFooter = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 8}}>
      <View style={styles.leftFoterIconContainer}>
        <Icon
          imgstyle={styles.footerIcon}
          imgUrl={postFooterIcons[0].imagUrl}
        />
        <Icon
          imgstyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imagUrl}
        />
        <Icon
          imgstyle={styles.footerIcon}
          imgUrl={postFooterIcons[2].imagUrl}
        />
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Icon
          imgstyle={styles.footerIcon}
          imgUrl={postFooterIcons[3].imagUrl}
        />
      </View>
    </View>
  );
};
const Icon = ({imgstyle, imgUrl}) => {
  return (
    <TouchableOpacity>
      <Image style={imgstyle} source={imgUrl} />
    </TouchableOpacity>
  );
};
const Likes = ({props}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{color: 'white', fontWeight: '600'}}>
        {props.likes} Likes
      </Text>
    </View>
  );
};
const Caption = ({props}) => {
  return (
    <View style={{marginTop: 5}}>
      <Text style={{color: 'white'}}>
        <Text style={{fontWeight: '700'}}> {props.user} </Text>
        <Text> {props.caption} </Text>
      </Text>
    </View>
  );
};
const CommentsSection = ({props}) => {
  return (
    <View style={{marginTop: 5}}>
      {!!props.comments.length && (
        <Text style={{color: 'gray'}}>
          View {props.comments.length > 1 ? ' all ' : ''}
          {props.comments.length}{' '}
          {props.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};
const Comments = ({props}) => {
  return (
    <>
      {props.comments.map((comment, index) => {
        return (
          <View key={index}>
            <Text style={{color: 'white'}}>
              <Text style={{fontWeight: '600'}}> {comment.user} </Text>
              {comment.comment}
            </Text>
          </View>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  shareIcon: {transform: [{rotate: '320deg'}], marginTop: -3},
  leftFoterIconContainer: {
    flexDirection: 'row',
    width: 33,
    height: 30,
  },
});
export default Post;
