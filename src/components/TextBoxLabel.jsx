import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextBoxLabel = ({label}) => {
    return (
      <View style={{width: "90%", flexDirection: "column" ,marginTop: 25 ,alignItems: "left"}}>
        <Text>{label}</Text>
        <TextInput style={[styles.input, {marginTop:5, borderRadius: 10}]}></TextInput>
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