import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar, ScrollView} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import { Pagination } from '../components/Pagination';
import TextBoxLabel from '../components/TextBoxLabel';
import TextBoxLabelSelect from '../components/TextBoxLabelSelect';
import PrimaryButton from '../components/PrimaryButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const RegistrarHabitosDiarios = ({showScreen, listaHabitos, paginacionHabitos, changePage, placeHolder, searchHabitosByFilter}) => {
  const [habitosArray, setHabitosArray] = useState([]);
  const [similarDescripcion, setSimilarDescripcion] = useState([]);

  useEffect(() => {
    console.log('render RegistrarHabitosDiarios');
    setHabitosArray([]);
  }, []);

  const Item = React.memo(({descripcion, categoria, color, item}) => ( 
    <TouchableOpacity style={styles.item} onPress={() => seleccionaHabito(item)}>
      <View style={{width: "20%"}}>
        <View style={[styles.circle, {alignSelf: "center", backgroundColor: color}]}></View>
      </View>
      <View style={{width: "75%", flexDirection: "column"}}>
        <Text style={{fontWeight: "bold"}}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
  ));
  
  const seleccionaHabito = (item) => {
    const index = habitosArray.findIndex(value => item.ID_HABITO === value.ID_HABITO);
    if (index === -1) {
      setHabitosArray([
        ...habitosArray,
        item
      ]);
    }else{
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Ya existe el elemento"
      });
    }
  };

  const onClose = (dat) => {
    const index = habitosArray.findIndex(item => item.ID_HABITO === dat.ID_HABITO);
    if (index !== -1) {
      const newArray = [...habitosArray.slice(0, index), ...habitosArray.slice(index + 1)];
      setHabitosArray(newArray);
    }
  };
  const renderListaHabitos = habitosArray.map((dato, index) => {
    return (
      <View style={[styles.selectedItem, {backgroundColor: dato.COLOR}]} key={index}>
        <Text>{dato.HABITO}</Text>
        <Icon style={{marginLeft: 2}} name={"close"} size={20} color="black" onPress={() => onClose(dato)}/>
      </View>
    );
  });
  const saveHistoryHabitsPerDay = () => {
    console.log("saveHistoryHabitsPerDay", habitosArray);
  };
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <View style={{width: "100%", height:"40%", flexDirection: "column", alignItems: "center"}}>
          <Text>Registro Habitos Diarios</Text>
          <TextBoxLabelSelect label="Categoria" _height={40} _fontSize={15} _iconSize={30} placeHolder={placeHolder}></TextBoxLabelSelect>
          <TextBoxLabel value={similarDescripcion} onChangeText={setSimilarDescripcion} label="Buscar por descripción" _height={40} _fontSize={15}></TextBoxLabel>
          <View style={{width: "100%", flexDirection: "row", justifyContent: "center", gap: 10}}>
            <PrimaryButton label="Guardar" _height={40} _width={100} onClick={saveHistoryHabitsPerDay}></PrimaryButton>
            <PrimaryButton label="Buscar" _height={40} _width={100} onClick={() => searchHabitosByFilter(similarDescripcion)}></PrimaryButton>
          </View>
          
        </View>
        <View style={{height: "42%", width: "100%"}}>
          <ScrollView style={{width: "100%", maxHeight: 100}}>
            <View style={{flexDirection: "row", flexWrap: 'wrap', width: "100%", alignContent: "row", padding: 5}}>
            {renderListaHabitos}
            </View>
          </ScrollView>
          <FlatList
            data={listaHabitos}
            renderItem={({item}) => <Item descripcion={item.HABITO} color={item.COLOR} categoria={item.CATEGORIA} item={item}/>}
          ></FlatList>
        </View>
        <View style={[{width: "100%", height: "8%", flexDirection: "column", justifyContent: "center"}]}>
          <Pagination paginacionDetalle={paginacionHabitos} changePage={changePage}></Pagination>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DFDFE5",
    backgroundColor: "#F6F6FC",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#DFDFE5",
    borderWidth: 1,
  },
  selectedItem: {
    width: "auto",
    marginRight: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#DFDFE5",
    borderWidth: 1,
  }
});

export default RegistrarHabitosDiarios