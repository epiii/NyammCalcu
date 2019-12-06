import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  result: {
    // color: "white",
    // fontSize: .2 * width,
    // fontWeight: "300",
    // padding: Platform.OS === "ios" ? 50 : 4,
    // textAlign: "center",

    // fontSize: 72,
    // textShadowOffset: {
    //   width: 5,
    //   height: 5
    // },
    // textShadowColor: "#333333",
    // textShadowRadius: 10


    // backgroundColor: 'yellow',
    textAlign: 'right',
    color: 'white',
    fontSize: .2 * width,
  }
});

export default styles;
