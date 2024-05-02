import React from "react";
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import MainStyle, {colors} from "../GlobalStyles/MainStyle";
import PrimaryButton from "../components/PrimaryButton";
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
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