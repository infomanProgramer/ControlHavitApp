import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';

const NuevaCategoria = ({showScreen}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const SwitchLabel = ({label}) => {
    return(
      <View style={{flexDirection: "row", alignItems: "flex-start", width: "90%", marginTop: 25}}>
        <Text>{label}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }; 

  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Nueva categoria</Text>
        <TextBoxLabel label="Descripción"/>
        <SwitchLabel label="¿Es bueno?"/>
    </View>
  )
}

export default NuevaCategoria