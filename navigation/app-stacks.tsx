import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import LivresScreen from "../screens/LivresScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ResumesScreen from "../screens/ResumesScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Livres: undefined;
  Details: undefined;
  Resumes: undefined;
};

// Define view stack inside livres tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const LivresStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Livres" component={LivresScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside resumes tab
const SettingsStack = createStackNavigator<RootStackParamList>();
export const ResumesStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Resumes" component={ResumesScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList, any>;
}
