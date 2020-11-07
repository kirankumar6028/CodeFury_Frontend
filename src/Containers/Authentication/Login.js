import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button, Input } from "react-native-elements";

import authenticateUser from "../../actions/login";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    props.authenticateUser({ email, password });
  };
  console.log(props.errorMessage);
  return (
    <View style={styles.containerStyle}>
      <Input
        placeholder="email"
        leftIcon={<Icon name="mail" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => setEmail(txt)}
        textContentType="emailAddress"
      />
      <Input
        placeholder="password"
        leftIcon={<Icon name="lock" size={18} color="black" />}
        style={styles.inputStyle}
        onChangeText={(txt) => setPassword(txt)}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        title="Login"
        disabled={!email || !password}
        onPress={onLoginPress}
      />
      <Button
        title="Register as a new user"
        type="clear"
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      ></Button>
      <Text style={{ color: "red" }}>{props.errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 10,
    padding: 10,
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
    authenticateUser: (credential) => dispatch(authenticateUser(credential)),
  };
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
