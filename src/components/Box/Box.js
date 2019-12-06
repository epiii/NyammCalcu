import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Box = ({ content, style, onPress, onLayout, textColor }) => (
  <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress} onLayout={onLayout ? onLayout : null}>
    <Text style={[styles.text, { color: textColor ? textColor : 'white' }]}>{content}</Text>
  </TouchableOpacity>
);

export default Box;
