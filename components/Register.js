import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Register extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                      <View style={{width:width,marginTop:30}}>
                          <TextInput placeholder="Full name"
                             style={{
                                      height: 50,
                                      //width:300,
                                      marginLeft:35,marginRight:35,
                                      borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15
                                    }}
                          />
                      </View>
                      <View style={{width:width,marginTop:20}}>
                          <TextInput placeholder="Mobile NO.>"
                               style={{
                                        height: 50,
                                        //width:300,
                                        marginLeft:35,marginRight:35,
                                        borderColor: 'hsla(200, 80%, 20%,1)',
                                        borderRadius: 8,
                                        padding: 10,
                                        borderWidth: 2,fontSize:15
                                      }}
                                        maxLength={16}
                                        defaultValue="+91-  "
                                        keyboardType='numeric'
                          />
                      </View>
                      <View style={{width:width,marginTop:20}}>
                          <TextInput placeholder="E-mail"
                             style={{
                                      height: 50,
                                      //width:300,
                                      marginLeft:35,marginRight:35,
                                      borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15
                                    }}
                          />
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                        style={styles.reg}>
                            <Text style={{color:'white',fontSize:25}}>Register</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.term}>
                        <Text style={{fontSize:15,color:'gray',textAlign:'center',lineHeight:20}}>By joining the <Text style={{color:'black',fontWeight:'bold'}}>Your Shop</Text> you are agree to our
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}> Terms and conditions</Text></Text>
                      </View>   
                      <View style={{width:width,marginTop:150}}>
                          <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>Sign in with Google</Text>
                          <TouchableOpacity>
                          <Image source={require('./../assets/images/ngoogle.png')} style={{height:45,width:90,alignSelf:'center',marginTop:5}}></Image>
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
          borderRadius:8,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign:'center',
          marginTop:40
        
        },
        term: {
            marginRight: 30,
            marginLeft:30,
            marginTop: 20,
            
          },
      });