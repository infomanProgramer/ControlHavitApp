import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import { Pagination } from '../components/Pagination';

const Item = React.memo(({descripcion, categoria, color}) => ( 
  <TouchableOpacity style={styles.item}>
    <View style={{width: "20%"}}>
      <View style={[styles.circle, {alignSelf: "center", backgroundColor: color}]}></View>
    </View>
    <View style={{width: "75%", flexDirection: "column"}}>
      <Text style={{
                      backgroundColor: "#9090C2", 
                      color: "white", 
                      fontSize: 13, 
                      padding: 5, 
                      borderRadius: 10, 
                      // fontWeight: "bold", 
                      textAlign: "center",
                      marginBottom: 5, 
                      opacity: 0.8
                      }}>{categoria}</Text>
      <Text style={{fontWeight: "bold", color: 'black'}}>{descripcion}</Text>
    </View>
  </TouchableOpacity>
));
const ListaHabitos = ({showScreen, listaHabitos, paginacionHabitos, changePage}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text style={{color: 'black'}}>Lista habitos</Text>
        <Pagination paginacionDetalle={paginacionHabitos} changePage={changePage}></Pagination>
        <FlatList
          data={listaHabitos}
          renderItem={({item}) => <Item descripcion={item.HABITO} color={item.COLOR} categoria={item.CATEGORIA}/>}
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