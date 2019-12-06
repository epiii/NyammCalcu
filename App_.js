/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const sw = Math.round(Dimensions.get('window').width);
const sh = Math.round(Dimensions.get('window').height);


const onTap = (inp) => {

  console.warn(inp)
}

// componentD

getOrientation = () => {
  if (Dimensions.get('window').width < Dimensions.get('window').height) {
    this.setState({ orientation: 'portrait' });
  } else { this.setState({ orientation: 'landscape' }); }
};


const App: () => React$Node = () => {
  return (
    <View style={styles.cont}>

      {/* result */}
      <View style={styles.res}>
        <Text style={styles.resTxt}>15.000</Text>
      </View>

      {/* calculation */}
      <View style={styles.calc}>
        <Text style={styles.calcTxt}>
          10.000 + 5.000
        </Text>
      </View>

      {/* button  */}
      <View style={styles.btns}>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('ac')} >
            <Text style={[styles.btnTxt, { color: 'black' }]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('posNeg')} >
            <Text style={[styles.btnTxt, { color: 'black' }]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('percent')} >
            <Text style={[styles.btnTxt, { color: 'black' }]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('divider')} >
            <Text style={[styles.btnTxt, styles.btnOpr2,]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(7)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(8)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(9)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('multiplier')} >
            <Text style={[styles.btnTxt, styles.btnOpr2]}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(4)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(5)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(6)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('minus')} >
            <Text style={[styles.btnTxt, styles.btnOpr2]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(1)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(2)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap(3)} >
            <Text style={[styles.btnTxt, styles.btnNum]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('plus')} >
            <Text style={[styles.btnTxt, styles.btnOpr2]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={[styles.btnItem, { flex: 2 / 4, }]} onPress={() => onTap(0)} >
            <Text style={[styles.btnTxt, { width: sw * .44 }, styles.btnNum]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('comma')} >
            <Text style={[styles.btnTxt, styles.btnNum]}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={() => onTap('equal')} >
            <Text style={[styles.btnTxt, styles.btnOpr2]}>=</Text>
          </TouchableOpacity>
        </View>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  cont: {
    flex: 1,
    backgroundColor: 'black',
  },
  res: {
    flex: 3 / 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  calc: {
    flex: 1 / 15,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btns: {
    flex: 11 / 15,
    justifyContent: 'flex-start'
    // backgroundColor: 'yellow',
    // flexGrow: 7,
    // flexDirection: 'row',
  },

  resTxt: {
    color: 'white',
    fontSize: sw * .2,
  },
  calcTxt: {
    color: 'white',
    fontSize: sw * .1,
  },


  btnCircle: {
    flex: 1 / 4,
    // width: 100,
    // height: 100,
    // borderRadius: 100 / 2,
    backgroundColor: 'red'
  },
  btnRow: {
    flex: 1, flexDirection: 'row'
  },
  btnItem: {
    // alignSelf: 'center',
    // backgroundColor: 'red',
    flex: 1 / 4,
    padding: sw * .005
  },
  btnTxt: {
    paddingTop: sw * .04,
    width: sw * .21,
    height: sw * .21,
    backgroundColor: 'grey',
    borderRadius: (sw * .21) / 2,
    textAlign: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'white',
    fontSize: sw * .1
  },
  btnNum: {
    backgroundColor: '#333333'
  },
  btnOpr2: {
    backgroundColor: 'orange'
  }

});

export default App;
