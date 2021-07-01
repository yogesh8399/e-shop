import React from 'react';
import {ImageBackground,Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
const Splash = ({ navigation }) => {
    setTimeout(() =>{
                       navigation.replace('Welcome');  //after splash screen vanishes it will navigate to login screen. 
                    }, 
                    3000);                          //3 seconds is the time for which splash screen will be visible
    return (
         <ImageBackground style={{flex:1,height:height,width:width}} source={require('./../assets/images/shop_logo.jpg')}></ImageBackground>
    );
}
export default Splash;   
