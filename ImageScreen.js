import React from 'react';
import ImageDetails from './Component/ImageDetails';
import{
 View,
 Text,
 StyleSheet
}from 'react-native';

const ImageScreen = () =>{
    return(
        <View>
            <Text>Image Screen</Text>

        <ImageDetails 
            title="Forest" 
              imageSource={require('https://thumbs.dreamstime.com/b/cutout-rock-surrounded-pine-trees-fir-forest-garden-design-isolated-white-background-decorative-shrub-landscaping-225480325.jpg')}/>
        <ImageDetails
             title="Beach"
               imageSource={require('https://thumbs.dreamstime.com/z/beach-papua-new-guinea-153569683.jpg')}/>
        <ImageDetails 
             title="Mountain" 
               imageSource={require('https://thumbs.dreamstime.com/z/wheat-field-mountain-country-houses-khuzestan-province-iran-229047805.jpg')} />

        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;