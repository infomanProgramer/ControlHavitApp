import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';

const NuevoHabito = ({showScreen}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Nuevo habito</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default NuevoHabito