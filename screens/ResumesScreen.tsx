import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { NavigationProps } from "../navigation/app-stacks";

export default class ResumesScreen extends Component<NavigationProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Livres")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
}
