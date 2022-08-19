import { Image, Platform, StyleSheet, View } from "react-native";
import { addLogo, heartIcon, messagesIcon } from "../constants";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import headerLogo from "../assets/header-logo.png";
import { sizes } from "../constants";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={headerLogo} style={styles.logo} resizeMode="contain" />
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: addLogo }}
            style={styles.smallLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: heartIcon }}
            style={styles.smallLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: messagesIcon }}
            style={styles.smallLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "35%",
  },
  smallLogo: {
    width: sizes.icon + 5,
    height: sizes.icon + 5,
  },
  logo: {
    width: "30%",
    height: 60,
  },
});
