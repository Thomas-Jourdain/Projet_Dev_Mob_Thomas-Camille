import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";

export default class LivresScreen extends Component<NavigationProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Resumes")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
}
