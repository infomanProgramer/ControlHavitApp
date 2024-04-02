import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import ColorPalette from 'react-native-color-palette';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';

const ColorPaletteSelect = ({onChange}) => {
    let selectedColor = '#C0392B';
    const paletteColorArray = [
        '#C0392B',
        '#E74C3C', 
        '#9B59B6', 
        '#8E44AD', 
        '#2980B9',
        "#FFFFFF",
        "#4A4AD7",
        "#A0A0E5",
        "#287495",
        "#313195",
        "#00f900",
        "#00f9da",
        "#076723",
        "#117d11",
        "#3bcbc4",
        "#57ce73",
        "#8D9236",
        "#b3c783",
        "#c0de5a",
        "#f12828",
        "#f14242",
        "#f54848",
        "#f5f900"
    ]
    return (
        <View style={{width: "90%", marginTop: 25}}>
            <Text>Seleccionar un color:</Text>
            <View style={{borderRadius: 15, width: "100%", marginTop:5, paddingBottom: 11, backgroundColor: colors.plomo, flexDirection: "column", alignItems: "center"}}>
                <ColorPalette
                    onChange={(color) => onChange(color)}
                    defaultColor={'#C0392B'}
                    colors={paletteColorArray}
                    title={"Selecciona un color"}
                    icon={<Text>✔</Text>}
                    scaleToWindow={true}
                    titleStyles={{color: "transparent"}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default ColorPaletteSelect
