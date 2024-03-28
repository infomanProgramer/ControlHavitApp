import React from "react";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import MainStyle from "../GlobalStyles/MainStyle";
import PrimaryButton from "../components/PrimaryButton";

const Login = ({navigation}) => {
    const irHome = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={MainStyle.containerPrimary}>
            <PrimaryButton label="Ingresar" onClick={irHome}/>
            <Text style={[{marginBottom: "90%", textAlign: "center"}, MainStyle.textPrimaryBold_50px]}>
                Aplicación Control de Habitos
            </Text>
        </View>
    );
};

export default Login;