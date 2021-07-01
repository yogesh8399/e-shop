import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                    <View style={{width:width,height:height * 0.65,backgroundColor: 'hsla(200, 80%, 20%,1)',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Image source={require('./../assets/images/local.png')} style={{height:100,width:100,alignSelf:'center',marginTop:100}}></Image>
                      <Text style={{fontSize:17,color:'white',textAlign:'center',marginTop:40}}>WELCOME TO </Text>
                      <Text style={{fontSize:30,color:'white',fontWeight:'bold', textAlign:'center',marginTop:10}}>YOUR SHOP</Text>
                      <Text style={{fontSize:12,color:'white',textAlign:'center',marginTop:40}}>Here we connects!!!</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:width * 0.5,marginTop:15}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                              <Image source={require('./../assets/images/customer.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center'}}>As a Customer</Text>
                        </View>
                        <View style={{width:width * 0.5,marginTop:15}}>
                              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Image source={require('./../assets/images/shopkeeper.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                              </TouchableOpacity>
                              <Text style={{textAlign:'center'}}>As a Shopkeeper</Text>
                        </View>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate('Login')}
                       style={styles.reg}>
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