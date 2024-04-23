import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector} from 'react-redux';
import { setModalVisible } from '../../store/store';

const TextBoxLabelSelect = ({label, onChangeText, text, errorText = "", placeHolder, selectCategory}) => {
  const changeIconSw = useSelector((state) => state.modalVisible);
  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(setModalVisible(true))
  };

  return (
    <View style={{width: "90%", flexDirection: "column" ,marginTop: 25 ,alignItems: "left"}}>
      <Text>{label}</Text>
      <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
        <TextInput
          placeholder={placeHolder} 
          style={[styles.input, {marginTop:5, borderRadius: 10}]} 
          onChangeText={onChangeText}
          value={text}
        />
        <Icon style={{position: "absolute", right: 10}} name={changeIconSw?"chevron-down-outline":"chevron-back-outline"} size={40} color={colors.plomo_oscuro} onPress={onClick}/>
      </View>
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

export default TextBoxLabelSelect;