import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ig_logo, sizes } from "../../constants";

import React from "react";
import RegisterForm from "../../components/RegisterForm";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
      >
        <Image
          source={{ uri: ig_logo }}
          style={styles.logo}
          resizeMode="contain"
        />
        <RegisterForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
