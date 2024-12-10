import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const Modal = ({showScreen, setData, id, value, closeModal, onClickFlatList}) => {

  // const onClickFlatList = (id, value) => {
  //   console.log(id, value);
  // };
  
  const Item = (({item, id, value}) => (
    <TouchableOpacity onPress={() => onClickFlatList(item[id], item[value])} style={{width: "100%", paddingTop: 20, paddingBottom: 20, borderTopColor: "#DADAE0", borderTopWidth: 1}}>
      <Text key={item.id} style={{alignSelf: "center", color: "black"}}>{item[value]}</Text>
    </TouchableOpacity>
  ));
  return (
    <View style={[MainStyle.containerModal, showScreen?MainStyle.visible:MainStyle.hidden]}>
      <View style={{height: "100%", backgroundColor:"black", opacity: 0.5}}>
      </View>
      <View style={{height: 'auto', width: "100%", backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, position:"absolute", zIndex: 2, bottom: 0}}>
        <TouchableOpacity style={{height: 30}} onPress={closeModal}>
          <Icon name="close" style={[{marginRight: 10, alignSelf: "flex-end"}]} size={30} color={colors.plomo_oscuro}/> 
        </TouchableOpacity>
        <FlatList style={{width: "100%"}}
          data={setData}
          renderItem={({item}) => <Item item={item} id={id} value={value}/>}
        ></FlatList>
      </View>
    </View>
  )
}

export default Modal;

