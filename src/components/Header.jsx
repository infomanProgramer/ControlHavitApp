import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainStyle, {colors} from "../GlobalStyles/MainStyle";

const Header = ({onClickItemMenuPassData}) => {
    const [showButton, setShowButton] = useState(true);

    const menuPrincipalArray = [
        {key: 1, value: 'Nueva Categoria', icon: 'add'},
        {key: 2, value: 'Lista Categorias', icon: 'list-circle'},
        {key: 3, value: 'Nueva Habito', icon: 'add-circle'},
        {key: 4, value: 'Lista Habitos', icon: 'list-circle-outline'},
        {key: 5, value: 'Registrar habitos diarios', icon: 'barbell-sharp'},
        {key: 6, value: 'Historial registro diario', icon: 'bar-chart-outline'}
    ];

    const toggleButton = () => {
        setShowButton(!showButton);
    }

    const onClickItemMenu = (id) => {
        setShowButton(!showButton);
        onClickItemMenuPassData(id);
    };

    const Item = ({title, icon, id}) => (
        <TouchableOpacity onPress={() => onClickItemMenu(id)} style={styles.item}>
            <Icon name={icon} style={[{marginLeft: 10}]} size={25} color={colors.blanco}/> 
            <Text style={{color: colors.blanco, marginLeft: 10}}>{title}</Text>
        </TouchableOpacity>
    );

    const MenuPrincipal = () => {
        return (
            <View style={[styles.container, !showButton? MainStyle.visible : MainStyle.hidden]}>
                <FlatList 
                    data={menuPrincipalArray}
                    renderItem={({item}) => <Item title={item.value} icon={item.icon} id={item.key} />}></FlatList>
            </View>
        );
    };

    return(
        <View style={[styles.container_header, {flexDirection: 'column', alignItems: 'left'}]}>
            <TouchableOpacity onPress={toggleButton} style={{height: "100%", width: 70, flexDirection: "row", alignItems: "center"}}>
                <Icon name={showButton? "menu":"close"} style={[{marginLeft: 10}]} size={50} color={colors.blanco}/> 
            </TouchableOpacity>
            <MenuPrincipal></MenuPrincipal>
        </View>
    );
};

const styles = StyleSheet.create({
    container_header: {
        backgroundColor: colors.purpura,
        height: "10%",
        verticalAlign: "middle",
        zIndex: 1,
        flexDirection: "column"
    },
    container: {
        width: "100%", 
        height: "auto", 
        backgroundColor: colors.purpura,
        position: "absolute",
        top: "100%"
    },
    item: {
        padding: 10,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center"
    },
});

export default Header;