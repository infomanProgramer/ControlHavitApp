import React, { useEffect } from "react";
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import MainStyle, {colors} from "../GlobalStyles/MainStyle";
import PrimaryButton from "../components/PrimaryButton";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUrlControlHavitApi } from "../../store/store";

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("********** Bienvenido desde Login **********");
        recuperarIP();
    }, []); 

    const recuperarIP = async () => {
        try {
            const value = await AsyncStorage.getItem('nuevaIPStorage');
            if (value!== null) {
                // We have data!!
                console.log(`IP Recuperada en el menú Inicio: ${value}`);
                dispatch(setUrlControlHavitApi(value));
            }else {
                console.log("No hay IP almacenada");
                //navigation.navigate("Settings");
                //dispatch(setUrlControlHavitApi("http://192.168.0.100:8000/"));
            }
        } catch(e) {
            // error reading value
            console.log("Error: No hay IP almacenada => " + e.message);
        }
    };
    const irHome = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={MainStyle.containerPrimary}>
            <View style={{width: "100%", height:"70%"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{backgroundColor: "transparent", width: "100%", paddingLeft: 10}}>
                    <Icon style={{marginTop: 20, marginBottom:20}} name="settings-outline" size={50} color={colors.purpura}/>
                </TouchableOpacity>
                <Text style={[{textAlign: "center"}, MainStyle.textPrimaryBold_50px]}>
                    Aplicación Control de Habitos
                </Text>
            </View>
            <View style={{width: "100%", height:"30%", flexDirection: "column-reverse", alignItems: "center"}}>
                <PrimaryButton label="Ingresar" onClick={irHome}/>
            </View>
        </View>
    );
};

export default Login;