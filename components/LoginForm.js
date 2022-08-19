import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors, sizes } from "../constants";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username or email"
          placeholderTextColor={colors.grey2}
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.grey2}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text
          style={{
            alignSelf: "flex-end",
            color: colors.lightBlue,
          }}
          onPress={() => console.log("Forgot password")}
        >
          Forgot password?
        </Text>
      </View>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "center" }}>Dont't have an account? </Text>
        <Text
          style={{
            color: colors.lightBlue,
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    justifyContent: "space-around",
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
    width: "100%",
    height: 45,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
