import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/store";
import Authentication from "./src/Containers/Authentication/Authentication";
import LabourForm from "./src/Containers/LabourForm/LabourForm";

export default class App extends React.Component {
  componentDidMount = () => {
    ScreenOrientation.unlockAsync();
  };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <View style={styles.container}>
            <LabourForm />
          </View>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
