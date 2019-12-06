import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  question: {
    // backgroundColor: 'red',
    // textAlign: 'left',
    // color: "#fafafa",
    // width:'100%',
    // fontSize: 16,
    // padding: 10

    // backgroundColor: 'yellow',
    textAlign: 'right',
    fontSize: .07 * width,
    color: 'white'
  }
});

export default styles;
