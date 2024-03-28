import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';

const RegistrarHabitosDiarios = ({showScreen}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Registrar habitos diarios</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default RegistrarHabitosDiarios