import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainStyle, {colors} from "../GlobalStyles/MainStyle";

const Header = () => {
    const [showButton, setShowButton] = useState(true);

    const menuPrincipalArray = [
        {key: 1, value: 'Nueva Categoria'},
        {key: 2, value: 'Lista Categorias'},
        {key: 3, value: 'Nueva Habito'},
        {key: 4, value: 'Lista Habitos'},
        {key: 5, value: 'Registrar habitos diarios'},
        {key: 6, value: 'Historial registro diario'},
        {key: 7, value: 'Registrar habitos diarios'},
        {key: 8, value: 'Historial registro diario'}
    ];

    const toggleButton = () => {
        setShowButton(!showButton);
    }

    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const MenuPrincipal = () => {
        return (
            <View style={[styles.container, !showButton? MainStyle.visible : MainStyle.hidden]}>
                <FlatList 
                    data={menuPrincipalArray}
                    renderItem={({item}) => <Item title={item.value} />}></FlatList>
            </View>
        );
    };

    return(
        <View style={[styles.container_header, {flexDirection: 'column', alignItems: 'left'}]}>
            <TouchableOpacity onPress={toggleButton} style={{height: 60, width: 70, flexDirection: "row", alignItems: "center"}}>
                <Icon name="menu" style={[{marginLeft: 10}]} size={50} color={colors.blanco}/> 
            </TouchableOpacity>
            <MenuPrincipal></MenuPrincipal>
        </View>
    );
};

const styles = StyleSheet.create({
    container_header: {
        backgroundColor: colors.purpura,
        // minHeight: "10%",
        height: "auto",
        verticalAlign: "middle"
    },
    container: {
        width: "100%", 
        height: "auto", 
        backgroundColor: colors.crema
    },
    // container: {
    //     flex: 1,
    //     marginTop: StatusBar.currentHeight || 0,
    // },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});

export default Header;