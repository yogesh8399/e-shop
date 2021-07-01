//This file is for Otp verification 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput,TouchableOpacity,SafeAreaView,Dimensions} from 'react-native'; 
const { width, height } = Dimensions.get("window");
export default class Otp extends React.Component {
  render(){
   const { navigation } = this.props
  return (
     <View style={styles.container}>
             <StatusBar style="light" />
             <View style={styles.ver}>
               <Text style={styles.text}>Enter Verification Code</Text>
             </View>
             <View style={styles.mob}>
                 <Text numberOfLines={2} style={{fontSize:17,textAlign:'center',color:'rgb(132,132,132)',lineHeight:25}}> we have sent you a 4-digit verification code on
                   <Text style={{color:'black'}}> +91 9712863899</Text>
                 </Text>
             </View>
             <View style={{width:width,marginTop:30}}>
                <TextInput placeholder="Enter OTP"
                         style={{
                             height: 60,
                             //width:300,
                             marginLeft:35,marginRight:35,
                             borderColor: 'hsla(200, 80%, 20%,1)',
                             borderRadius: 8,
                             padding: 20,
                             borderWidth: 2,fontSize:18
                         }}
                />
             </View>   
             <View style={{width:width,marginTop:10}}>
                 <TouchableOpacity      // On clicking register it will navigate to Register screen
                     style={styles.button}
                 > 
                    <Text style={styles.st}>Verify</Text>
                 </TouchableOpacity>
             </View>
             
       
     </View>
   );
  }
}
 const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
 },
   text: {
     fontSize: 25,
     color:'hsla(200, 80%, 20%,1)'
   },  
   ver: {
     marginTop: 40,
   },      
   mob: {
     marginTop: 20,
     marginRight:30,
     marginLeft:30
   },
   txt1: {
     fontSize: 15,
     color: 'gray',
     textAlign: 'center'
   },
   st: {
     color: 'white',
     fontSize: 20
   },
   button: {
     backgroundColor:'hsla(200, 80%, 20%,1)',
     height: 65,
     margin: 20,
     padding: 20,
     borderWidth: 2,
     marginRight:35,marginLeft:35,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 8 
   },
 }
);    
  
  




   
    
    
    
  
  
    
   