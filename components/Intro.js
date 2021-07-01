import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Intro extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                    <View style={{width:width,height:height * 0.65,backgroundColor: 'hsla(200, 80%, 20%,1)',borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                      <Image source={require('./../assets/images/local.png')} style={{height:100,width:100,alignSelf:'center',marginTop:100}}></Image>
                      <Text style={{fontSize:17,color:'white',textAlign:'center',marginTop:40}}>WELCOME TO </Text>
                      <Text style={{fontSize:30,color:'white',fontWeight:'bold', textAlign:'center',marginTop:10}}>YOUR SHOP</Text>
                      <Text style={{fontSize:12,color:'white',textAlign:'center',marginTop:40}}>Here we connects!!!</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:width * 0.5}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                              <Image source={require('./../assets/images/customer.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center'}}>Customer</Text>
                        </View>
                        <View style={{width:width * 0.5}}>
                              <TouchableOpacity>
                                <Image source={require('./../assets/images/shopkeeper.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                              </TouchableOpacity>
                              <Text style={{textAlign:'center'}}>Shopkeeper</Text>
                        </View>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.reg}>
                        <Text style={{color:'white',fontSize:25}}>Login</Text>
                      </TouchableOpacity>
                    </View>
           
                 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        reg:{
          backgroundColor: 'hsla(200, 80%, 20%,1)',
          height:60,
          marginLeft:37.7,
          marginRight:36.4,
          borderWidth:1.3,
          borderRadius:10,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign:'center',
          marginTop:40
        
        },
      });
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';


// const slides = [
//   {
//     key: '1',
//     title: 'Hello All',
//     text: 'Say something cool',
//     //image: image1,
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: '2',
//     title: ' Be Cool',
//     text: 'Other cool stuff',
//     //image: image2,
//     backgroundColor: '#febe29',
//   },
//   {
//     key: '3',
//     title: 'Let us Start',
//     text: 'We are already cool!',
//     //image: image3,
//     backgroundColor: '#22bcb5',
//   }
// ];

// export default class Intro extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       showSlides: true
//     }
//   }

//   renderSlide = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//         {/* <Image source={item.image} /> */}
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   }
//   onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showSlides: false });
//   }

  

//   render() {const { navigation } = this.props
//     if (!this.state.showSlides) {
//       return (<View style={styles.container}>
//         <Text style= {styles.text}>
//           You are Home!!
//         </Text>


//       </View>);
//     } else {
//       return <AppIntroSlider
//        showSkipButton
//        renderItem={this.renderItem} 
//        slides={slides} 
//        onDone={this.onDone}/>;
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16
//   }
// });
