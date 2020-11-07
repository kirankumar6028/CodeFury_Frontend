import React, { Component } from "react";
import { Text, View } from "react-native";
import Login from "./Login";
import Register from "./Register";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Authentication extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </View>
    );
  }
}
