import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import NuevaCategoria from "../pages/nueva-categoria";
import HistorialHabitos from "../pages/historial-habitos";
import ListaCategorias from "../pages/lista-catagorias";
import ListaHabitos from "../pages/lista-habitos";
import NuevoHabito from "../pages/nuevo-habito";
import RegistrarHabitosDiarios from "../pages/registrar-habitos-diarios";

const Main = () => {
    const [HistorialHabitosVisible, setHistorialHabitosVisible] = useState(false);
    const [ListaCategoriasVisible, setListaCategoriasVisible] = useState(false);
    const [ListaHabitosVisible, setListaHabitosVisible] = useState(false);
    const [NuevaCategoriaVisible, setNuevaCategoriaVisible] = useState(true);
    const [NuevaHabitoVisible, setNuevaHabitoVisible] = useState(false);
    const [RegistrarHabitosDiariosVisible, setRegistrarHabitosDiariosVisible] = useState(false);

    const handleDataMenuItemPassData = (id) => {
        switch (id) {
            case 1://Nueva Categoria
                setNuevaCategoriaVisible(true);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 2://Lista Categorias
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(true);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 3://Nuevo habito
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(true);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 4://Lista de habitos
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(true);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 5://Registrar habitos diarios
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(true);
                setHistorialHabitosVisible(false);
                break;
            case 6://Historial registro diario
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(true);
                break;
        }
    };

    return(
        <View style={styles.mainContainer}>
            <Header onClickItemMenuPassData={handleDataMenuItemPassData}/>
            
            <NuevaCategoria showScreen={NuevaCategoriaVisible}/>
            <ListaCategorias showScreen={ListaCategoriasVisible}/>
            <NuevoHabito showScreen={NuevaHabitoVisible}/>
            <ListaHabitos showScreen={ListaHabitosVisible}/>
            <RegistrarHabitosDiarios showScreen={RegistrarHabitosDiariosVisible}/>
            <HistorialHabitos showScreen={HistorialHabitosVisible}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#FFFFFF',
        height: '100%',
        flexDirection: "column"
    }
});

export default Main;