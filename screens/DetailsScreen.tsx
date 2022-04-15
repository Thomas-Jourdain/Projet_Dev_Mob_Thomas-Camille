import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";

export default class DetailsScreen extends Component<NavigationProps, {}> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}
