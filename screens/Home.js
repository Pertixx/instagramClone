import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
