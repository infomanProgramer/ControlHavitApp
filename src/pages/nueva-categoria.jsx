import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';
import SwitchLabel from '../components/SwitchLabel';
import ColorPaletteSelect from '../components/ColorPaletteSelect';
import PrimaryButton from '../components/PrimaryButton';

const NuevaCategoria = ({showScreen}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
      <Text>Nueva categoria</Text>
      <TextBoxLabel label="Descripción"/>
      <SwitchLabel label="¿Es bueno?"/>
      <ColorPaletteSelect/>

        <PrimaryButton label="Guardar"/>

    </View>
  )
}

export default NuevaCategoria