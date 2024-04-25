import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Pagination = ({paginacionHabitos}) => {
  return (
    <View style={styles.container}>
        <View style={styles.arrow_left}></View>
        <View style={styles.esfera}><Text style={styles.esfera_texto}>1</Text></View>
        <View style={styles.esferaCenter}><Text style={styles.esferaCenter_texto}>2</Text></View>
        <View style={styles.esfera}><Text style={styles.esfera_texto}>3</Text></View>
        <View style={styles.arrow_right}></View>
    </View>
  )
}

const styles = StyleSheet.create({
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
        // borderLeftColor: "red",
        // borderLeftWidth: 15,
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
        // borderRightColor: "#AC3CA6",
        // borderRightWidth: 25,
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
