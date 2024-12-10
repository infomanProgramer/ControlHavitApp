import { StyleSheet } from "react-native";

export const colors = {
            blanco: "#FFFFFF",
            purpura: "#4A4AD7",
            purpuraLight: "#A0A0E5",
            crema: "#287495",
            plomo: "#E5E5F6",
            plomo_oscuro: "#9696B1"
        }

export default StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.purpura,
        width: 200,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100/2
    },
    textPrimaryBold_14px: {
        color: colors.blanco,
        fontWeight: "bold",
        fontSize: 14,
    },
    textPrimaryBold_50px: {
        color: colors.blanco,
        fontWeight: "bold",
        fontSize: 50,
    },
    containerPrimary: {
        backgroundColor: colors.purpuraLight,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    containerSecondary: {
        paddingTop: 20,
        backgroundColor: colors.blanco,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    visible: {
        display: 'flex',
    },
    hidden: {
        display: 'none',
    },
    container: {
        backgroundColor: colors.blanco,
        height: "90%",
        flexDirection: "column",
        alignItems: "center",
    },
    containerModal: {
        backgroundColor: "transparent",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 2
    },
    containerModalLoading: {
        backgroundColor:"black", 
        opacity: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 2
    }
});