import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import PrimaryButton from '../components/PrimaryButton';
import { Pagination } from '../components/Pagination';


const Item = ({fecha, habitos}) => {
  const renderHabitosPorDia = habitos.map((data, index) => {
    return (
      <Text key={index} style={[styles.habitoItem, {backgroundColor: data.COLOR}]}>{data.DESCRIPCION}</Text>
    )
  })
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.subitem}>
        <Text style={{fontWeight: 'bold'}}>{fecha}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {renderHabitosPorDia}
        </View>
      </View>
    </TouchableOpacity>
  )
};
const HistorialHabitos = ({showScreen, listaSeguimiento, paginacionHabitos, changePage}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text>Historial habitos</Text>
        <Pagination paginacionDetalle={paginacionHabitos} changePage={changePage}></Pagination>
        <FlatList
          style={{width: '100%'}}
          data={listaSeguimiento}
          renderItem={({item}) => <Item fecha={item.FECHA_REGISTRO} habitos={JSON.parse(item.HABITOS_ARRAY)}/>}
        ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
      width: '100%',
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10
    },
    subitem: {
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      borderColor: "#DFDFE5",
      backgroundColor: "#F6F6FC",
      borderWidth: 1,
      borderRadius: 15,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'column',
    },
    habitoItem:{
      backgroundColor: 'green',
      margin: 5,
      padding: 5,
      borderRadius: 10
    }
});

export default HistorialHabitos