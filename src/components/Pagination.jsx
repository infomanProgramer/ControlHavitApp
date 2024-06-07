import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MainStyle from '../GlobalStyles/MainStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setPaginationNumber } from '../../store/store';
import { setPageActive } from '../../store/store';

export const Pagination = ({paginacionDetalle, changePage}) => {
    const [numberLeft, setNumberLeft] = useState(1);
    const [numberMiddle, setNumberMiddle] = useState(2);
    const [numberRight, setNumberRight] = useState(3);
    const pageActive = useSelector((state) => state.pageActive);
    //const [pageActive, setPageActive] = useState(1);

    const dispatch = useDispatch();

    const goLeft = () => {
        if(pageActive == 1){
            setNumberLeft(1);
            setNumberMiddle(2);
            setNumberRight(3);
        }
        if(paginacionDetalle.pages >= 3){
            if(pageActive-2 >= 1){
                setNumberLeft(pageActive-2)
                setNumberMiddle(pageActive-1);
                setNumberRight(pageActive);
            }
            if(pageActive > 1){
                dispatch(setPageActive(pageActive - 1));
                changePage(pageActive - 1);
            }
        }else if(paginacionDetalle.pages == 2){
            if(pageActive > 1){
                //setPageActive(pageActive - 1);
                dispatch(setPageActive(pageActive - 1));
                changePage(pageActive - 1);
            }
        }
    };
    const goRight = () => {
        if(pageActive == 1){
            setNumberLeft(1);
            setNumberMiddle(2);
            setNumberRight(3);
        }
        if(paginacionDetalle.pages >= 3){
            if(pageActive < paginacionDetalle.pages){
                dispatch(setPageActive(pageActive + 1));
                changePage(pageActive+1);
            }
            if(pageActive > 1 && (pageActive + 1 < paginacionDetalle.pages)){
                setNumberLeft(pageActive);
                setNumberMiddle(pageActive+1);
                setNumberRight(pageActive+2);
            }
        }else if(paginacionDetalle.pages == 2){
            if(pageActive < 2){
                dispatch(setPageActive(pageActive + 1));
                changePage(pageActive+1);
            }
        }
    };
  return (
    <View style={[styles.container]}>
        <Text style={[styles.page, {color: 'black'}]}>1</Text>
        <TouchableOpacity style={styles.arrow_left} onPress={goLeft}></TouchableOpacity>
        <View style={pageActive == 1? styles.esferaCenter:styles.esfera}>
            <Text style={pageActive == 1?styles.esferaCenter_texto:styles.esfera_texto}>{pageActive == 1? pageActive:numberLeft}</Text>
        </View>
        <View style={[pageActive > 1 && pageActive < paginacionDetalle.pages?styles.esferaCenter:styles.esfera, paginacionDetalle.pages <= 2?MainStyle.hidden:MainStyle.visible]}>
            <Text style={pageActive > 1 && pageActive < paginacionDetalle.pages?styles.esferaCenter_texto:styles.esfera_texto}>{pageActive == 1?2:numberMiddle}</Text>
        </View>
        <View style={[pageActive == paginacionDetalle.pages? styles.esferaCenter:styles.esfera, paginacionDetalle.pages <= 1?MainStyle.hidden:MainStyle.visible]}>
            <Text style={pageActive == paginacionDetalle.pages?styles.esferaCenter_texto:styles.esfera_texto}>{paginacionDetalle.pages == 2?2:pageActive == 1? 3:numberRight}</Text>
        </View>
        <TouchableOpacity style={styles.arrow_right} onPress={goRight}></TouchableOpacity>
        <Text style={[styles.page, {color: 'black'}]}>{paginacionDetalle.pages}</Text>
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
