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
import { setModalVisible } from "../../store/store";

const Main = () => {
    const urlControlHavitAPI = useSelector((state) => state.urlControlHavitAPI);
    const modalVisible = useSelector((state) => state.modalVisible);
    const [HistorialHabitosVisible, setHistorialHabitosVisible] = useState(false);
    const [ListaCategoriasVisible, setListaCategoriasVisible] = useState(false);
    const [ListaHabitosVisible, setListaHabitosVisible] = useState(false);
    const [NuevaCategoriaVisible, setNuevaCategoriaVisible] = useState(true);
    const [NuevaHabitoVisible, setNuevaHabitoVisible] = useState(false);
    const [RegistrarHabitosDiariosVisible, setRegistrarHabitosDiariosVisible] = useState(false);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [arrayModal, setArrayModal] = useState([])
    const [id, setId] = useState(0);
    const [value, setValue] = useState("");
    const [placeHolderNuevoHabito, setPlaceHolderNuevoHabito] = useState("Seleccione una categoria");
    const [categoriaSelected, setCategoriaSelected] = useState(-1);
    const [listaHabitos, setListaHabitos] = useState([]);
    
    const dispatch = useDispatch();

    const loadCategorias = async () => {
        try{
            const response = await fetch(urlControlHavitAPI+"api/getListaCategorias/1");
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    };
    const loadCategoriasListaCategorias = async () => {
        try{
            const {cod_resp, lista_categorias} = await loadCategorias();
            if(cod_resp == 200){
                setListaCategoria(lista_categorias);
            }else{
                console.error("error");
            }
        }catch(error) {
            console.error(error);
        }
    };
    const loadCategoriasNuevoHabito = async () => {
        try{
            const {cod_resp, lista_categorias} = await loadCategorias();
            if(cod_resp == 200){
                setArrayModal(lista_categorias);
                setId("ID_CATEGORIAHABITOS");
                setValue("DESCRIPCION")
            }else{
                console.error("error");
            }
        }catch(error) {
            console.error(error);
        }
    };
    const loadHabitos = async () => {
        try{
            const response = await fetch(urlControlHavitAPI+"api/getListaHabitos/1");
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    };
    const loadHabitosListaHabitos = async () => {
        try{
            const {cod_resp, lista_habitos} = await loadHabitos();
            if(cod_resp == 200){
                console.log(lista_habitos)
                setListaHabitos(lista_habitos);
            }else{
                console.log("Error");
            }
        }catch(error){
            console.error(error);
        }
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
                loadCategoriasListaCategorias();
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(true);
                setNuevaHabitoVisible(false);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 3://Nuevo habito
                loadCategoriasNuevoHabito();
                setNuevaCategoriaVisible(false);
                setListaCategoriasVisible(false);
                setNuevaHabitoVisible(true);
                setListaHabitosVisible(false);
                setRegistrarHabitosDiariosVisible(false);
                setHistorialHabitosVisible(false);
                break;
            case 4://Lista de habitos
                loadHabitosListaHabitos();
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
        dispatch(setModalVisible(false))
    };
    const onClickFlatList = (id, value) => {
        console.log(id, value);
        setPlaceHolderNuevoHabito(value);
        setCategoriaSelected(id);
        closeModal();
    };
    const cleanFieldCategorySelected = () => {
        setPlaceHolderNuevoHabito("Seleccione una categoria");
        setCategoriaSelected(-1);
    };
    return(
        <View style={styles.mainContainer}>
            <Modal showScreen={modalVisible} setData={arrayModal} id={id} value={value} closeModal={closeModal} onClickFlatList={onClickFlatList}/>
            <Header onClickItemMenuPassData={handleDataMenuItemPassData}/>
            <NuevaCategoria showScreen={NuevaCategoriaVisible}/>
            <ListaCategorias showScreen={ListaCategoriasVisible} listaCategorias={listaCategoria}/>
            <NuevoHabito showScreen={NuevaHabitoVisible} placeHolder={placeHolderNuevoHabito} idCategoriaSelected={categoriaSelected} cleanFieldCategorySelected={cleanFieldCategorySelected}/>
            <ListaHabitos showScreen={ListaHabitosVisible} listaHabitos={listaHabitos}/>
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