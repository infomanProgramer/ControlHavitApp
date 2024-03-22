import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Header from "../components/Header";

const Main = () => {
    return(
        <View style={styles.mainContainer}>
            <Header/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#FFFFFF',
        height: '100%',
    }
});

export default Main;