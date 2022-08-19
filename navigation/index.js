import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
