import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import MainStyle from '../GlobalStyles/MainStyle';

const TextBoxLabel = ({label, onChangeText, text, errorText = "", placeHolder, _height=60, _fontSize=20}) => {

  return (
    <View style={{width: "90%", flexDirection: "column" ,marginTop: 25 ,alignItems: "left"}}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeHolder} 
        style={[styles.input, {marginTop:5, borderRadius: 10, height: _height, fontSize: _fontSize,}]} 
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={[{color: "red", fontSize: 11}, errorText.length > 0? MainStyle.visible: MainStyle.hidden]}>{errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%",
      borderWidth: 1,
      fontFamily: "Helvetica Neue",
      color: "black"
    },
});

export default TextBoxLabel;