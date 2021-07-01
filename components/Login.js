import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Welcome extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                    {/* <Image source={require('./../assets/images/local.png')} style={{height:100,width:100,alignSelf:'center',marginTop:30}}></Image>
                    <Text style={{fontSize:17,color:'white',textAlign:'center',marginTop:30}}>Login To</Text>
                    <Text style={{fontSize:30,textAlign:'center',marginTop:10,color:'white'}}>YOUR SHOP</Text> */}
                    <View style={{backgroundColor:'white',marginRight:20,marginLeft:20,marginTop:10,borderRadius:8,paddingBottom:10}}>
                        <Text style={{marginLeft:20,marginTop:10,fontSize:15}}>E-mail id</Text>
                        <TextInput placeholder="abc@gmail.com"
                                style={{
                                        height: 40,
                                        //width:300,
                                        marginLeft:20,marginRight:20,marginTop:10,
                                        borderColor: 'hsla(200, 80%, 20%,1)',
                                        borderRadius: 8,
                                        padding: 10,
                                        borderWidth: 2,fontSize:15
                                        }}
                            />
                        <Text style={{marginLeft:20,marginTop:10,fontSize:15}}>Password</Text>
                        <TextInput placeholder="**********"
                                style={{
                                        height: 40,
                                        marginLeft:20,marginRight:20,marginTop:10,
                                        borderColor: 'hsla(200, 80%, 20%,1)',
                                        borderRadius: 8,
                                        padding: 10,
                                        borderWidth: 2,fontSize:15
                                        }}
                            />
                        <TouchableOpacity 
                         style={styles.reg}>
                            <Text style={{color:'white',fontSize:20}}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,textAlign:'center',marginTop:10}}>continue with</Text>
                        <TouchableOpacity>
                          <Image source={require('./../assets/images/fblong.png')} style={{height:40,width:90,alignSelf:'center',marginTop:10}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'white',marginRight:20,marginLeft:20,marginTop:20,borderRadius:8,paddingBottom:30}}>
                          <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:15}}>REGISTER</Text>
                          <View style={{flexDirection:'row'}}>
                          <View style={{width:width * 0.5 - 20,marginTop:15}}>
                              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Image source={require('./../assets/images/customer.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                              </TouchableOpacity>
                              <Text style={{textAlign:'center'}}>As a Customer</Text>
                          </View>
                          <View style={{width:width * 0.5 - 20,marginTop:15}}>
                                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                  <Image source={require('./../assets/images/shopkeeper.png')} style={{height:80,width:80,alignSelf:'center',marginTop:20}}></Image>
                                </TouchableOpacity>
                                <Text style={{textAlign:'center'}}>As a Shopkeeper</Text>
                          </View>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}
                         style={styles.reg}>
                          <Text style={{color:'white',fontSize:25}}>Register</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'hsla(200, 80%, 20%,1)',
        },
        reg:{
          backgroundColor: 'hsla(200, 80%, 20%,1)',
          height:50,
          marginLeft:20,
          marginRight:20,
          borderWidth:1.3,
          borderRadius:10,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign:'center',
          marginTop:20
        
        },
      });