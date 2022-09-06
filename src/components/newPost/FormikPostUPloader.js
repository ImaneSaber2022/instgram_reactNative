import {View, Text, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url'
const PLACEHOLDER_IMG =
  'https://megapolis-center.ru/images/content/magazine/no-foto.png';

const UploadPostSchema = yup.object().shape({
  imagUrl: yup.string().url().required('A URL is required'),
  caption: yup.string().max(2200, 'Caption has reached the character limit.'),
});
const FormikPostUPloader = ({navigation}) => {
  const [thumbrailUrl, setThumbrailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{caption: '', imagUrl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log(' Your post  was submited successfully')
        navigation.goBack()
      }}
      validationSchema={UploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: validUrl.isUri(thumbrailUrl) 
                ? thumbrailUrl 
                : PLACEHOLDER_IMG}}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 18}}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbrailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 16}}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange('imagUrl')}
            onBlur={handleBlur('imagUrl')}
            value={values.imagUrl}
          />
          {errors.imagUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imagUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUPloader;
