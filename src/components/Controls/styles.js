import {
  StyleSheet, Dimensions
} from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    // backgroundColor: "#333E52",
    padding: "1%"
  },
  pretender: {
    // backgroundColor: "yellow",
    // backgroundColor: "#3CB6EE",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
    justifyContent: 'space-around',

    // nyamm
    margin: 3,
    // backgroundColor: 'red',
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    // width: "23%",
    // height: "23%",
    width: .21 * width,
    height: .21 * width,
    // margin: "1%",

    // nyamm 
    borderRadius: .21 * width / 2
  },
  double: {
    width: "48%"
  },
  black: {
    backgroundColor: "#414758"
  },
  green: {
    backgroundColor: "#73DB6D"
  },
  orange: {
    backgroundColor: "#F5A623"
  },
  grey: {
    backgroundColor: "#A6A6A6",
    color: 'black',
  },
  darkGrey: {
    backgroundColor: "#333333",
    // color: 'black',
  }
});

export default styles;
