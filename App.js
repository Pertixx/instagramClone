import { StyleSheet, View } from "react-native";

import Navigator from "./navigation";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { store } from "./redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Navigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
