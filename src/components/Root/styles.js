import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "black"
    // backgroundColor: "#3CB6EE"
  },
  content: {
    flex: 1,
    // backgroundColor: 'red'
  }
});

export default styles;
