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
            <PrimaryButton label="Ingresar" onClick={irHome}/>
            <Text style={[{marginBottom: "90%", textAlign: "center"}, MainStyle.textPrimaryBold_50px]}>
                Aplicación Control de Habitos
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{backgroundColor: "transparent", width: "100%", height: 100, paddingLeft: 10}}>
                <Icon name="settings-outline" size={50} color={colors.purpura}/>
            </TouchableOpacity>
        </View>
    );
};

export default Login;