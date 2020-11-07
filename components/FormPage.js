import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingViewBase,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Button,
  ScrollView
} from 'react-native';

export default class Form extends Component {


       constructor(props){
          super(props);
          this.state = {
            textInput : [],
            inputData : [],
            levelOfExpertise : [],
            city: [],
            phoneNumber: [],
            chargePerHour: []
          }
        }

        //function to add TextInput dynamically
        addTextInput = (index) => {
          let textInput = this.state.textInput;
          textInput.push(<TextInput style={styles.input}
            onChangeText={(text) => this.addValues(text, index)} />);
          this.setState({ textInput });
        }

        //function to remove TextInput dynamically
        removeTextInput = () => {
          let textInput = this.state.textInput;
          let inputData = this.state.inputData;
          textInput.pop();
          inputData.pop();
          this.setState({ textInput,inputData });
        }

        //function to add text from TextInputs into single array
        addValues = (text, index) => {
          let dataArray = this.state.inputData;
          let checkBool = false;
          if (dataArray.length !== 0){
            dataArray.forEach(element => {
              if (element.index === index ){
                element.text = text;
                checkBool = true;
              }
            });
          }
          if (checkBool){
          this.setState({
            inputData: dataArray
          });
        }
        else {
          dataArray.push({'text':text,'index':index});
          this.setState({
            inputData: dataArray
          });
        }
        }

  render() {

    return (  
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View >
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVe0cFaZ9e5Hm9X-tdWRLSvoZqg2bjemBABA&usqp=CAU'}}/>
                  <Text style={styles.name}>Full Name</Text>
              </View>
            </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>

                <Text style={styles.info}>Skills</Text>
                {this.state.textInput.map((value) => {
                  return value
                })}


                <View style= {styles.row}>
                  <View style={{margin: 10, marginLeft:50, padding:8, backgroundColor:"green", borderRadius:10}}>
                    <Text onPress={() => this.addTextInput(this.state.textInput.length)}>Add</Text>
                    </View>
                    <View style={{margin: 10, marginLeft:40,padding:8, backgroundColor:"gold", borderRadius:10}}>
                    <Text onPress={() => this.removeTextInput()} >Remove</Text>
                  </View>
                </View>
               

                <Text style={styles.info}>Level of Expertise</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState(text)} />

                <Text style={styles.info}>City</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState(text)}/>

                <Text style={styles.info}>Country</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState(text)} />

                <Text style={styles.info}>Phone Number</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState(text)} />

                <Text style={styles.info}>Charge per hour</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState(text)}/>


              </View>
            </View>


          <View style={styles.footer}>
            <TouchableOpacity style={styles.BtnLeft}>
                  <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View >
              <TouchableOpacity style={styles.BtnRight}>
                  <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
       </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:600,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    color: "#FFFFFF",
    marginLeft:70,
  },
  input: {
    padding:3,
    width:"70%",
    borderColor:"#a4b787", 
    borderWidth:2,
    backgroundColor:"#fff",
    borderRadius:15,
    marginLeft:50,
    marginBottom:5
  },
  footer:{
    marginTop:30,
  },
  BtnLeft:{
    width:"60%",
    backgroundColor:"#a20a0a",
    borderRadius:25,
    height:25,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:-150
  },
  BtnRight:{
    width:"60%",
    backgroundColor:"#16a596",
    borderRadius:25,
    height:25,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:-40,
    marginLeft:180
  },
  Text:{
    color:"white",
    padding:20,
    fontWeight:"bold"
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center'
    },
});
