import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Pagination = ({paginacionDetalle}) => {
    const [numberLeft, setNumberLeft] = useState(1);
    const [numberMiddle, setNumberMiddle] = useState(2);
    const [numberRight, setNumberRight] = useState(3);
    const [pageActive, setPageActive] = useState(1);

    // useEffect(() => {
    //     setPageActive(1);
    // })

    const goLeft = () => {
        if(pageActive-2 >= 1){
            setNumberLeft(pageActive-2)
            setNumberMiddle(pageActive-1);
            setNumberRight(pageActive);
        }
        if(pageActive > 1)
            setPageActive(pageActive - 1);
    };
    const goRight = () => {
        if(pageActive < paginacionDetalle.pages){
            setPageActive(pageActive + 1);
        }
        if(pageActive > 1 && (pageActive + 1 < paginacionDetalle.pages)){
            setNumberLeft(pageActive);
            setNumberMiddle(pageActive+1);
            setNumberRight(pageActive+2);
        }
    };
  return (
    <View style={styles.container}>
        <Text style={styles.page}>1</Text>
        <TouchableOpacity style={styles.arrow_left} onPress={goLeft}></TouchableOpacity>
        <Text>{pageActive}</Text>
        <View style={pageActive == 1? styles.esferaCenter:styles.esfera}>
            <Text style={pageActive == 1?styles.esferaCenter_texto:styles.esfera_texto}>{numberLeft}</Text>
        </View>
        <View style={pageActive > 1 && pageActive < paginacionDetalle.pages?styles.esferaCenter:styles.esfera}>
            <Text style={pageActive > 1 && pageActive < paginacionDetalle.pages?styles.esferaCenter_texto:styles.esfera_texto}>{numberMiddle}</Text>
        </View>
        <View style={pageActive == paginacionDetalle.pages? styles.esferaCenter:styles.esfera}>
            <Text style={pageActive == paginacionDetalle.pages?styles.esferaCenter_texto:styles.esfera_texto}>{numberRight}</Text>
        </View>

        <TouchableOpacity style={styles.arrow_right} onPress={goRight}></TouchableOpacity>
        <Text style={styles.page}>{paginacionDetalle.pages}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        fontSize: 10,
        marginRight: 10,
        marginLeft: 10
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftColor: "red",
        borderLeftWidth: 20,
        borderRightColor: "green",
        borderRightWidth: 20,
        borderBottomColor: "yellow",
        borderBottomWidth: 20,
        borderTopColor: "orange",
        borderTopWidth: 20
    },
    arrow_left: {
        width: 0,
        height: 0,
        borderRightColor: "#AC3CA6",
        borderRightWidth: 20,
        borderBottomColor: "transparent",
        borderBottomWidth: 15,
        borderTopColor: "transparent",
        borderTopWidth: 15,
        marginRight: 7
    },
    arrow_right: {
        width: 0,
        height: 0,
        borderLeftColor: "#AC3CA6",
        borderLeftWidth: 20,
        borderBottomColor: "transparent",
        borderBottomWidth: 15,
        borderTopColor: "transparent",
        borderTopWidth: 15,
        marginLeft: 10
    },
    container: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    esfera: {
        backgroundColor: "#D649CF",
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 5,
        alignSelf: "center",
        opacity: 0.8
    },
    esfera_texto: {
        alignSelf: "center",
        paddingTop: 5,
    },
    esferaCenter: {
        backgroundColor: "#D649CF",
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 5,
        alignSelf: "center",
    },
    esferaCenter_texto: {
        alignSelf: "center",
        paddingTop: 5,
        fontSize: 20
    },
    
});
