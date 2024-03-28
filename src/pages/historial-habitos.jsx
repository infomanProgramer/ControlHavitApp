import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import PrimaryButton from '../components/PrimaryButton';

const HistorialHabitos = ({showScreen}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Historial habitos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default HistorialHabitos