import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import TextBoxLabel from '../components/TextBoxLabel';
import SwitchLabel from '../components/SwitchLabel';
import ColorPaletteSelect from '../components/ColorPaletteSelect';
import PrimaryButton from '../components/PrimaryButton';

const NuevaCategoria = ({showScreen}) => {
  const [descripcion, setDescripcion] = useState("");
  const [descripcionError, setDescripcionError] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [color, setColor] = useState("");
  const [isPending, setIsPending] = useState(false); 
  
  const handleOnSubmit = () => {
    NewCategoriaObj = {};
    if(!descripcion){
      setDescripcionError("Debe rellenar el campo descripción");
      return; 
    }
    NewCategoriaObj.descripcion = descripcion;
    NewCategoriaObj.estado = 1;
    NewCategoriaObj.color = color;
    NewCategoriaObj.esbueno = 1;
    NewCategoriaObj.id_usuario = "1";

    console.log(NewCategoriaObj);
    fetch("http://localhost:5000/api/saveCategoria", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(NewCategoriaObj)
    }).then(() => {
      console.log("Nueva categoria añadida exitosamente");
    }).catch(err => {
      console.log("Ocurrio un error duante el guardado "+err);
    });  
  };

  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
      <Text>Nueva categoria</Text>
      <TextBoxLabel label="Descripción" onChangeText={setDescripcion} errorText={descripcionError}/>
      <SwitchLabel label="¿Es bueno?" toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
      <ColorPaletteSelect onChange={setColor}/>
      <Text>descripcion: {descripcion}</Text>
      <Text>Enabled: {isEnabled? "Verdad": "Falso"}</Text>
      <Text>Color: {color}</Text>
      <PrimaryButton label="Guardar" onClick={handleOnSubmit}/>

    </View>
  )
}

export default NuevaCategoria