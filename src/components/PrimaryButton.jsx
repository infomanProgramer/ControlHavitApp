import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import MainStyle from "../GlobalStyles/MainStyle";

const PrimaryButton = ({label, onClick, _height=60, _width=200}) => {
    return (
        <View>
            <TouchableHighlight style={[MainStyle.buttonPrimary, {marginBottom: 20, marginTop: 30, height: _height, width: _width}]} onPress={onClick}>
                <Text style={MainStyle.textPrimaryBold_14px}>{label}</Text>
            </TouchableHighlight>
        </View>
    )
}

export default PrimaryButton;
