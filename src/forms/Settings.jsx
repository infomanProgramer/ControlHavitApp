import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, AsyncStorage} from "react-native";
import MainStyle, {colors} from "../GlobalStyles/MainStyle";
import PrimaryButton from "../components/PrimaryButton";
import Icon from 'react-native-vector-icons/Ionicons';
import TextBoxLabel from "../components/TextBoxLabel";
import { useDispatch, useSelector } from 'react-redux';
import { setUrlControlHavitApi } from "../../store/store";

const Settings = ({navigation}) => {
    const [antiguaIp, setAntiguaIp] = useState(useSelector((state) => state.urlControlHavitAPI))
    const [nuevaIp, setNuevaIp] = useState("")
    const dispatch = useDispatch();
    
    const changeUrlControlHavitApi = () => {
        //Validaciones
        dispatch(setUrlControlHavitApi(nuevaIp));
        //limpiar campos
        //Popup de cambio satisfactorio
    };
    return(
        <View style={MainStyle.containerSecondary}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{backgroundColor: "transparent", width: "100%", height: 100, paddingLeft: 10}}>
                <Icon name="chevron-back-outline" size={50} color={colors.purpura}/>
            </TouchableOpacity>
            <TextBoxLabel onChangeText={setAntiguaIp} text={antiguaIp} label="Antigua IP"/>
            <TextBoxLabel onChangeText={setNuevaIp} text={nuevaIp} label="Nueva IP"/>
            <View style={{width: "100%", flexDirection: "column-reverse", alignItems: "center", height: 200}}>
                <PrimaryButton label="Guardar" onClick={changeUrlControlHavitApi}/>
            </View>
        </View>
    );
};

export default Settings;