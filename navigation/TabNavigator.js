import { colors, sizes } from "../constants";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Home from "../screens/Home";
import Market from "../screens/Market";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import React from "react";
import Reels from "../screens/Reels";
import Search from "../screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <Foundation name="home" size={sizes.icon} color={color} />;
            case "Search":
              return (
                <AntDesign name="search1" size={sizes.icon} color={color} />
              );
            case "Reels":
              return (
                <MaterialCommunityIcons
                  name="movie-play"
                  size={sizes.icon}
                  color={color}
                />
              );
            case "Market":
              return (
                <Entypo name="shopping-bag" size={sizes.icon} color={color} />
              );
            case "Profile":
              return <AntDesign name="user" size={sizes.icon} color={color} />;
            default:
              break;
          }
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
        tabBarInactiveTintColor: colors.grey2,
        tabBarActiveTintColor: colors.white,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
