import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector} from 'react-redux';
import { setModalVisible } from '../../store/store';

const TextBoxLabelSelect = ({label, onChangeText, text, errorText = "", placeHolder, selectCategory, _height=60, _fontSize=20, _iconSize=40}) => {
  const changeIconSw = useSelector((state) => state.modalVisible);
  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(setModalVisible(true))
  };

  return (
    <View style={{width: "90%", flexDirection: "column" ,marginTop: 25 ,alignItems: "left"}}>
      <Text style={{color: "black"}}>{label}</Text>
      <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
        <TextInput
          placeholder={placeHolder} 
          placeholderTextColor={colors.plomo_oscuro}
          style={[styles.input, {marginTop:5, borderRadius: 10, height: _height, fontSize: _fontSize,}]} 
          onChangeText={onChangeText}
          value={text}
        />
        <Icon style={{position: "absolute", right: 10}} name={changeIconSw?"chevron-down-outline":"chevron-back-outline"} size={_iconSize} color={colors.plomo_oscuro} onPress={onClick}/>
      </View>
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

export default TextBoxLabelSelect;