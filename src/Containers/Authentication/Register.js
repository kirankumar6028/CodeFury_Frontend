import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button, Input } from "react-native-elements";
import { connect } from "react-redux";

import userRegister from "../../actions/register";

function Register(props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitRegistration = () => {
    props.userRegister({ email, firstName, lastName, password });
  };

  return (
    <View style={styles.containerStyle}>
      <Input
        placeholder="First Name"
        leftIcon={<Icon name="user" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => {
          setFirstName(txt);
        }}
      />
      <Input
        placeholder="Last Name"
        leftIcon={<Icon name="adduser" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => {
          setLastName(txt);
        }}
      />
      <Input
        placeholder="email"
        leftIcon={<Icon name="mail" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
        textContentType="emailAddress"
      />
      <Input
        placeholder="password"
        leftIcon={<Icon name="lock" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        title="Register"
        disabled={!firstName || !lastName || !email || !password}
        onPress={onSubmitRegistration}
      />
      <Button
        title="Already a user"
        type="clear"
        onPress={() => {
          props.navigation.pop();
        }}
      ></Button>
      <Text style={{ color: "red" }}>{props.errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 10,
    marginTop: 10,

    // alignItems: "center",
    // justifyContent: "center",
  },
  inputStyle: {
    padding: 0,
    // height: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (credentials) => dispatch(userRegister(credentials)),
  };
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
