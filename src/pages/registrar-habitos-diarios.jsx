import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';

const RegistrarHabitosDiarios = ({showScreen}) => {
  return (
    <View style={[styles.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Registrar habitos diarios</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purpuraLight,
        height: "100%"
    }
});

export default RegistrarHabitosDiarios