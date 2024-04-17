import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';
import TextBoxLabelSelect from '../components/TextBoxLabelSelect';
import ColorPaletteSelect from '../components/ColorPaletteSelect';
import PrimaryButton from '../components/PrimaryButton';

const NuevoHabito = ({showScreen}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Nuevo habito</Text>
        <TextBoxLabelSelect label="Seleccionar una categoria"></TextBoxLabelSelect>
        <TextBoxLabel label="Descripción"></TextBoxLabel>
        <ColorPaletteSelect></ColorPaletteSelect>
        <PrimaryButton label="Guardar"></PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default NuevoHabito