import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';
import TextBoxLabelSelect from '../components/TextBoxLabelSelect';
import ColorPaletteSelect from '../components/ColorPaletteSelect';
import PrimaryButton from '../components/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

const NuevoHabito = ({showScreen, placeHolder, idCategoriaSelected, cleanFieldCategorySelected}) => {
  const urlControlHavitAPI = useSelector((state) => state.urlControlHavitAPI);
  const [descripcionHabito, setDescripcionHabito] = useState("");
  const [errorDescripHabito, setErrorDescripHabito] = useState("");
  const [errorIdCategoriaSelected, setErrorIdCategoriaSelected] = useState("");
  const [color, setColor] = useState("#FFFFFF")

  const cleanFields = () => {
    setDescripcionHabito("");
    setErrorDescripHabito("");
    setErrorIdCategoriaSelected("");
    setColor("#FFFFFF");
    cleanFieldCategorySelected();
  };
  const guardarNuevoHabito = () => {
    if(idCategoriaSelected == -1){
      setErrorIdCategoriaSelected("Seleccionar una categoria");
      return;
    }else{
      setErrorIdCategoriaSelected("");
    }
    if(!descripcionHabito){
      console.log("Ingresa a la descripcion");
      setErrorDescripHabito("Debe llenar la descripción");
      return;
    }
    else{
      setErrorDescripHabito("");
    }
    NewHabitoObj = {};
    NewHabitoObj.descripcion = descripcionHabito;
    NewHabitoObj.estado = 1;
    NewHabitoObj.color = color;
    NewHabitoObj.color_text = null;
    NewHabitoObj.id_categoriahabitos = idCategoriaSelected;
    NewHabitoObj.hora_inicio = null;
    NewHabitoObj.hora_fin = null;

    console.log(NewHabitoObj)
    try{
      fetch(urlControlHavitAPI+'api/saveHabito', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(NewHabitoObj)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        if(data.cod_resp == 200){
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: data.message
          });
          cleanFields();
        }
      }).catch((error) => {
        console.log("Ingresa por el fetch", error);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error
        });
      });
    }catch(err){
      console.log("Ingresa por el catch", err);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err
      });
    };
  };
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text style={{color: 'black'}}>Nuevo habito</Text>
        <TextBoxLabelSelect label="Categoria" placeHolder={placeHolder} errorText={errorIdCategoriaSelected}></TextBoxLabelSelect>
        <TextBoxLabel label="Descripción" errorText={errorDescripHabito} text={descripcionHabito} onChangeText={setDescripcionHabito}></TextBoxLabel>
        <ColorPaletteSelect colorSelected={color} onChange={setColor}></ColorPaletteSelect>
        <PrimaryButton label="Guardar" onClick={guardarNuevoHabito}></PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default NuevoHabito