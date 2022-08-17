import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
