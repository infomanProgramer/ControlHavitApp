import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import NuevaCategoria from "../pages/nueva-categoria";
import HistorialHabitos from "../pages/historial-habitos";
import ListaCategorias from "../pages/lista-catagorias";
import ListaHabitos from "../pages/lista-habitos";
import NuevoHabito from "../pages/nuevo-habito";
import RegistrarHabitosDiarios from "../pages/registrar-habitos-diarios";
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../components/Modal";

const Main = () => {
    const urlControlHavitAPI = useSelector((state) => state.urlControlHavitAPI);
    const [HistorialHabitosVisible, setHistorialHabitosVisible] = useState(false);
    const [ListaCategoriasVisible, setListaCategoriasVisible] = useState(false);
    const [ListaHabitosVisible, setListaHabitosVisible] = useState(false);
    const [NuevaCategoriaVisible, setNuevaCategoriaVisible] = useState(true);
    const [NuevaHabitoVisible, setNuevaHabitoVisible] = useState(false);
    const [RegistrarHabitosDiariosVisible, setRegistrarHabitosDiariosVisible] = useState(false);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [modalVisible, setModalVisible] = useState(true);

    const loadCategorias = () => {
        fetch(urlControlHavitAPI+"api/getListaCategorias/1")
            .then(response => response.json())
            .then(data => {
                const {cod_resp, lista_categorias} = data;
                if(cod_resp == 200){
                    setListaCategoria(lista_categorias);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
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
                loadCategorias();
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
    const closeModal = () => {
        setModalVisible(false);
    };
    const arr = [{key: 1, value: 'Uno'}, {key: 2, value: 'Dos'}, {key: 3, value: 'Tres'}];
    return(
        <View style={styles.mainContainer}>
            <Modal showScreen={modalVisible} setData={arr} id="key" value="value" closeModal={closeModal}/>
            <Header onClickItemMenuPassData={handleDataMenuItemPassData}/>
            <NuevaCategoria showScreen={NuevaCategoriaVisible}/>
            <ListaCategorias showScreen={ListaCategoriasVisible} listaCategorias={listaCategoria}/>
            <NuevoHabito showScreen={NuevaHabitoVisible}/>
            <ListaHabitos showScreen={ListaHabitosVisible}/>
            <RegistrarHabitosDiarios showScreen={RegistrarHabitosDiariosVisible}/>
            <HistorialHabitos showScreen={HistorialHabitosVisible}/>
            <Toast 
                position = 'bottom'
                bottomOffset={20}
            />
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