import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
      
    return (
      <View style={styles.container}>
        {/* <Text style={styles.logo}>Hai User</Text> */}
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.Text}>Become Worker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.Text}>Become Jobseller</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn:{
    width:"80%",
    backgroundColor:"#16a596",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  Text:{
    color:"white",
    padding:20,
    fontWeight:"bold"
  }
});