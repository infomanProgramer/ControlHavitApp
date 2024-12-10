import React, {useEffect, useRef} from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import MainStyle, {colors} from '../GlobalStyles/MainStyle';
const ModalLoading = ({showScreen}) => {
    const colorAnim1 = useRef(new Animated.Value(0)).current;
    const colorAnim2 = useRef(new Animated.Value(0)).current;
    const colorAnim3 = useRef(new Animated.Value(0)).current;
    const colorAnim4 = useRef(new Animated.Value(0)).current;
    const colorAnim5 = useRef(new Animated.Value(0)).current; 
    useEffect(() => {
        // Animación en bucle de 0 a 1
        Animated.loop(
            Animated.sequence([
                Animated.timing(colorAnim1, {
                    toValue: 1, // Va a 1
                    duration: 1000, // Duración de ida
                    useNativeDriver: false, // Necesario para animar colores
                }),
                Animated.timing(colorAnim2, {
                    toValue: 1, // Va a 1
                    duration: 1000, // Duración de ida
                    useNativeDriver: false, // Necesario para animar colores
                }),
                Animated.timing(colorAnim3, {
                    toValue: 1, // Va a 1
                    duration: 1000, // Duración de ida
                    useNativeDriver: false, // Necesario para animar colores
                }),
                Animated.timing(colorAnim4, {
                    toValue: 1, // Va a 1
                    duration: 1000, // Duración de ida
                    useNativeDriver: false, // Necesario para animar colores
                }),
                Animated.timing(colorAnim5, {
                    toValue: 1, // Va a 1
                    duration: 1000, // Duración de ida
                    useNativeDriver: false, // Necesario para animar colores
                }),

                Animated.timing(colorAnim1, {
                    toValue: 0, // Vuelve a 0
                    duration: 0, // Duración de vuelta
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim2, {
                    toValue: 0, // Vuelve a 0
                    duration: 0, // Duración de vuelta
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim3, {
                    toValue: 0, // Vuelve a 0
                    duration: 0, // Duración de vuelta
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim4, {
                    toValue: 0, // Vuelve a 0
                    duration: 0, // Duración de vuelta
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim5, {
                    toValue: 0, // Vuelve a 0
                    duration: 0, // Duración de vuelta
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [colorAnim1, colorAnim2, colorAnim3, colorAnim4, colorAnim5]);

    const backgroundColor1 = colorAnim1.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'white'], // De rojo a azul
    });
    const backgroundColor2 = colorAnim2.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'white'], // De rojo a azul
    });
    const backgroundColo3 = colorAnim3.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'white'], // De rojo a azul
    });
    const backgroundColo4 = colorAnim4.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'white'], // De rojo a azul
    });
    const backgroundColo5 = colorAnim5.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'white'], // De rojo a azul
    });

    return(
        <View style={[MainStyle.containerModalLoading, showScreen?MainStyle.visible:MainStyle.hidden]}>
            <Text style={{color: 'white', opacity: 1, fontSize: 20}}>LOADING...</Text>
            <View style={{width: 'auto', height: 'auto', backgroundColor: 'transparent', opacity: 1, flexDirection: "row", borderColor: "white", borderWidth: 3}}>
                <Animated.View style={[{width: 20, height: 20, backgroundColor: backgroundColor1, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}]}></Animated.View>
                <Animated.View style={{width: 20, height: 20, backgroundColor: backgroundColor2, marginTop: 5, marginBottom: 5, marginRight: 5}}></Animated.View>
                <Animated.View style={{width: 20, height: 20, backgroundColor: backgroundColo3, marginTop: 5, marginBottom: 5, marginRight: 5}}></Animated.View>
                <Animated.View style={{width: 20, height: 20, backgroundColor: backgroundColo4, marginTop: 5, marginBottom: 5, marginRight: 5}}></Animated.View>
                <Animated.View style={{width: 20, height: 20, backgroundColor: backgroundColo5, marginTop: 5, marginBottom: 5, marginRight: 5}}></Animated.View>
            </View>
        </View>
    );
};
export default ModalLoading;