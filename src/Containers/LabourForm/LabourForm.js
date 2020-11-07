import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { Input, Item } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import ReactChipsInput from "react-native-chips";

class LabourForm extends Component {
  state = {
    skills: [],
    expertizeLeve: [],
    city: "",
    locality: "",
    address: "",
    phoneNum: "",
    charge: "",
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text h4>Fill with appropriate details</Text>
        <ScrollView>
          <Item>
            <Icon name="mobile1" size={18} color="black" />
            <Input
              placeholder="Phone number"
              style={styles.inputStyle}
              onChangeText={(txt) => this.setState({ phoneNum: txt })}
            />
          </Item>
          <Item>
            <Icon name="pushpino" size={18} color="black" />
            <Input
              placeholder="city"
              style={styles.inputStyle}
              onChangeText={(txt) => this.setState({ city: txt })}
            />
          </Item>
          <Item>
            <Icon name="enviroment" size={18} color="black" />
            <Input
              placeholder="locality"
              style={styles.inputStyle}
              onChangeText={(txt) => this.setState({ locality: txt })}
            />
          </Item>
          <Item>
            <Icon name="enviromento" size={18} color="black" />
            <Input
              placeholder="address"
              style={styles.inputStyle}
              onChangeText={(txt) => this.setState({ address: txt })}
            />
          </Item>
          <Item>
            <Icon name="clockcircle" size={18} color="black" />
            <Input
              placeholder="approximate charge per hour"
              style={styles.inputStyle}
              onChangeText={(txt) => this.setState({ country: txt })}
            />
          </Item>

          <ReactChipsInput
            label="Enter your skills"
            initialChips={this.state.skills}
            onChangeChips={(chips) => {
              this.setState({ skills: chips });
            }}
            inputStyle={{
              height: 50,
              borderBottomWidth: 1,
              marginHorizontal: 10,
            }}
          />
          <Text>*Add a skill and hit enter</Text>
          <Button title="Save profile"></Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputStyle: {
    // margin: 1,
    margin: 5,
    // borderBottomWidth: 1,
    marginHorizontal: 10,
  },
});

export default connect()(LabourForm);
