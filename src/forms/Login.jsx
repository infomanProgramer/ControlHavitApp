import React from "react";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import MainStyle from "../GlobalStyles/MainStyle";

const Login = ({navigation}) => {
    const irHome = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={MainStyle.containerPrimary}>
            <TouchableHighlight style={[MainStyle.buttonPrimary, {marginBottom: 20}]} onPress={irHome}><Text style={MainStyle.textPrimaryBold_14px}>Ingresar</Text></TouchableHighlight>
            <Text style={[{marginBottom: "90%", textAlign: "center"}, MainStyle.textPrimaryBold_50px]}>
                Aplicación Control de Habitos
            </Text>
        </View>
    );
};

export default Login;