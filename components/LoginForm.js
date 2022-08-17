import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, sizes } from "../constants";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username or email"
        placeholderTextColor={colors.grey2}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.grey2}
      />
      <Text
        style={{
          alignSelf: "flex-end",
          color: colors.lightBlue,
        }}
      >
        Forgot password?
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: sizes.font,
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    backgroundColor: colors.white2,
    width: "100%",
    borderWidth: 2,
    borderColor: colors.grey,
    borderRadius: 5,
    paddingHorizontal: sizes.padding,
    paddingVertical:
      Platform.OS === "ios" ? sizes.padding - 2 : sizes.padding - 10,
    marginBottom: sizes.padding,
  },
  button: {
    marginTop: 40,
    width: "100%",
    height: 45,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
