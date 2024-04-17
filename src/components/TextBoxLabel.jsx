import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import MainStyle from '../GlobalStyles/MainStyle';

const TextBoxLabel = ({label, onChangeText, text, errorText = "", placeHolder}) => {

  return (
    <View style={{width: "90%", flexDirection: "column" ,marginTop: 25 ,alignItems: "left"}}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeHolder} 
        style={[styles.input, {marginTop:5, borderRadius: 10}]} 
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={[{color: "red", fontSize: 11}, errorText.length > 0? MainStyle.visible: MainStyle.hidden]}>{errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 60,
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%",
      borderWidth: 1,
      fontFamily: "Helvetica Neue",
      fontSize: 20,
      color: "black"
    },
});

export default TextBoxLabel;