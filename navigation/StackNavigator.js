import React from "react";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStack"
    >
      <Stack.Screen name="HomeStack" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
