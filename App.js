import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Splash from './components/Splash';
import Login from './components/Login';
import Intro from './components/Intro';
import Register from './components/Register';
import Otp from './components/Otp';
import Home from './components/Home';
const Stack = createStackNavigator();
export default class App extends React.Component {
    render(){
      const { navigation } = this.props
      return (
         <NavigationContainer> 
             <Stack.Navigator initialRouteName="Splash">  
               <Stack.Screen name="Welcome" component={Welcome} 
                    options={{
                                  headerShown: false
                                }}
               />
               <Stack.Screen name="Splash" component={Splash} 
                    options={{
                              headerShown: false
                             }}     
              />  
              <Stack.Screen name="Login" component={Login} 
                    options={{
                            title: 'LOGIN',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
               <Stack.Screen name="Register" component={Register} 
                    options={{
                            title: 'REGISTER',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
                <Stack.Screen name="Otp" component={Otp} 
                    options={{
                            title: 'OTP',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
               <Stack.Screen name="Intro" component={Intro} 
                    options={{
                              headerShown: false
                            }}
              />
               <Stack.Screen name="Home" component={Home} 
                    options={{
                              headerShown: false
                            }}
              />
                    
        </Stack.Navigator>
      </NavigationContainer>
     );
    } 
  }        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
