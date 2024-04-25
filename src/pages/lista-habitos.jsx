import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import { Pagination } from '../components/Pagination';

const Item = React.memo(({descripcion, color}) => ( 
  <TouchableOpacity style={styles.item}>
    <View style={{width: "20%"}}>
      <View style={[styles.circle, {alignSelf: "center", backgroundColor: color}]}></View>
    </View>
    <View style={{width: "60%"}}>
      <Text>{descripcion}</Text>
    </View>
    <View style={{width: "20%"}}>
      
    </View>
  </TouchableOpacity>
));
const ListaHabitos = ({showScreen, listaHabitos, paginacionHabitos}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Lista habitos</Text>
        <Pagination paginacionDetalle={paginacionHabitos}></Pagination>
        <FlatList
          data={listaHabitos}
          renderItem={({item}) => <Item descripcion={item.HABITO} color={item.COLOR}/>}
        ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 70,
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
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#DFDFE5",
    borderWidth: 1,
  },
});
export default ListaHabitos