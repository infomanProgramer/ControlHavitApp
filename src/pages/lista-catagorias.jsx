import React, { useCallback, useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Switch, StatusBar} from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';


const Item = React.memo(({descripcion, color, isEnabled}) => ( 
  <TouchableOpacity style={styles.item}>
    <View style={{width: "20%"}}>
      <View style={[styles.circle, {alignSelf: "center", backgroundColor: color}]}></View>
    </View>
    <View style={{width: "60%"}}>
      <Text>{descripcion}</Text>
    </View>
    <View style={{width: "20%"}}>
      <Switch
        style={{alignSelf: "center"}}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        value={isEnabled}
       />
    </View>
  </TouchableOpacity>
));
const ListaCategorias = ({showScreen, listaCategorias}) => {
  
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <Text style={{width: "100%"}}>Lista de categorias</Text>
        <FlatList style={{width: "100%"}}
          data={listaCategorias}
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          renderItem={({item}) => <Item descripcion={item.DESCRIPCION} color={item.COLOR} isEnabled={item.ESBUENO}/>}></FlatList>
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

export default ListaCategorias