import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';

const NuevoHabito = ({showScreen}) => {
  return (
    <View style={[styles.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Nuevo habito</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purpuraLight,
        height: "100%"
    }
});

export default NuevoHabito