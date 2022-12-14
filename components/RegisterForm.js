import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors, sizes } from "../constants";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const RegisterForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.grey2}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={colors.grey2}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.grey2}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: sizes.font,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ alignSelf: "center" }}>Already have an account? </Text>
        <Text
          style={{
            color: colors.lightBlue,
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
        </Text>
      </View>
    </View>
  );
};

export default RegisterForm;

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
