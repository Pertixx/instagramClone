import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { ig_logo, sizes } from "../../constants";

import LoginForm from "../../components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image
          source={{ uri: ig_logo }}
          style={styles.logo}
          resizeMode="contain"
        />
        <LoginForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: sizes.padding,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    marginBottom: 70,
  },
});
