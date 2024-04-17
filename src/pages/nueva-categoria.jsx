import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';
import SwitchLabel from '../components/SwitchLabel';
import ColorPaletteSelect from '../components/ColorPaletteSelect';
import PrimaryButton from '../components/PrimaryButton';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';


const NuevaCategoria = ({showScreen}) => {
  const [descripcion, setDescripcion] = useState("");
  const [descripcionError, setDescripcionError] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [color, setColor] = useState("#FFFFFF");
  const [isPending, setIsPending] = useState(false); 
  const urlControlHavitAPI = useSelector((state) => state.urlControlHavitAPI);
  
  const handleOnSubmit = () => {
    NewCategoriaObj = {};
    if(!descripcion){
      setDescripcionError("Debe rellenar el campo descripción");
      return; 
    }
    NewCategoriaObj.descripcion = descripcion;
    NewCategoriaObj.estado = 1;
    NewCategoriaObj.color = color;
    NewCategoriaObj.esbueno = isEnabled;
    NewCategoriaObj.id_usuario = "1";
    try{
      fetch(urlControlHavitAPI+"api/saveCategoria", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(NewCategoriaObj)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        if(data.cod_resp == 200){
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: data.message
          });
          cleanFields()
        }else{
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: data.message
          });
          cleanFields()
        }  
      }).catch((err) => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err
        });
        cleanFields()
      });
    }catch(err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err
      });
      cleanFields()
    }  
  };

  const cleanFields = () => {
    setDescripcion("");
    setDescripcionError("");
    setIsEnabled(false);
    setColor("#FFFFFF");
  }

  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
      <Text>Nueva categoria</Text>
      <TextBoxLabel label="Descripción" onChangeText={setDescripcion} text={descripcion} errorText={descripcionError}/>
      <SwitchLabel label="¿Es bueno?" toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
      <ColorPaletteSelect colorSelected={color} onChange={setColor}/>
      <PrimaryButton label="Guardar" onClick={handleOnSubmit}/>
    </View>
  )
}

export default NuevaCategoria