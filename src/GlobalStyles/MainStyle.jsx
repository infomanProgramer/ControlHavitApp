import { StyleSheet } from "react-native";

export const colors = {
            blanco: "#FFFFFF",
            purpura: "#4A4AD7",
            purpuraLight: "#A0A0E5",
            crema: "#287495",
            plomo: "#E5E5F6"
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
        flexDirection: "column-reverse",
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
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
    }
});