import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import NuevaCategoria from '../pages/nueva-categoria';
import HistorialHabitos from '../pages/historial-habitos';
import ListaCategorias from '../pages/lista-catagorias';
import ListaHabitos from '../pages/lista-habitos';
import NuevoHabito from '../pages/nuevo-habito';
import RegistrarHabitosDiarios from '../pages/registrar-habitos-diarios';
import CalendarHabit from '../pages/calendar-habit';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import Modal from '../components/Modal';
import {
  setModalVisible,
  setModalVisibleRegistraH,
  setPageActive,
} from '../../store/store';

const Main = () => {
  const urlControlHavitAPI = useSelector(state => state.urlControlHavitAPI);
  const paginationNumber = useSelector(state => state.paginationNumber);
  const modalVisible = useSelector(state => state.modalVisible);
  const modalVisibleRegistrarH = useSelector(
    state => state.modalVisibleRegistrarH,
  );
  const [HistorialHabitosVisible, setHistorialHabitosVisible] = useState(false);
  const [ListaCategoriasVisible, setListaCategoriasVisible] = useState(false);
  const [ListaHabitosVisible, setListaHabitosVisible] = useState(false);
  const [NuevaCategoriaVisible, setNuevaCategoriaVisible] = useState(true);
  const [NuevaHabitoVisible, setNuevaHabitoVisible] = useState(false);
  const [RegistrarHabitosDiariosVisible, setRegistrarHabitosDiariosVisible] =
    useState(false);
  const [CaledarVisible, setCaledarVisible] = useState(false);
  const [listaCategoria, setListaCategoria] = useState([]);
  const [arrayModal, setArrayModal] = useState([]);
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [placeHolderNuevoHabito, setPlaceHolderNuevoHabito] = useState(
    'Seleccione una categoria',
  );
  const [categoriaSelected, setCategoriaSelected] = useState(-1);
  const [listaHabitos, setListaHabitos] = useState([]);
  const [paginacionHabitos, setPaginacionHabitos] = useState({});
  const [numberPage, setNumberPage] = useState(1);
  const [listaSeguimiento, setListaSeguimiento] = useState([]);
  const [mesesGestion, setMesesGestion] = useState([]);
  const [yearCalendar, setYearCalendar] = useState(0);
  const [descHabito, setDescHabito] = useState('');
  const pageActive = useSelector(state => state.pageActive);

  const dispatch = useDispatch();

  const loadCategorias = async () => {
    try {
      const response = await fetch(
        urlControlHavitAPI + 'api/getListaCategorias/1',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const loadCategoriasListaCategorias = async () => {
    try {
      const {cod_resp, lista_categorias} = await loadCategorias();
      if (cod_resp == 200) {
        setListaCategoria(lista_categorias);
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadCategoriasNuevoHabito = async () => {
    try {
      const {cod_resp, lista_categorias} = await loadCategorias();
      if (cod_resp == 200) {
        setArrayModal(lista_categorias);
        setId('ID_CATEGORIAHABITOS');
        setValue('DESCRIPCION');
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadHistoricoHabitosDiarios = async pag => {
    try {
      const response = await fetch(
        urlControlHavitAPI +
          'api/historicoHabitosDiarios?page=' +
          pag +
          '&per_page=5',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const loadHistoricoHabitosDiariosRender = async pag => {
    const {cod_resp, lista_seguimiento, meta} =
      await loadHistoricoHabitosDiarios(pag);
    console.log('Ingresa a loadHistoricoHabitosDiariosRender: ');
    if (cod_resp == 200) {
      setListaSeguimiento(lista_seguimiento);
      //console.log('lista_seguimiento => ', lista_seguimiento);
      setPaginacionHabitos(meta);
      //console.log('paginacionHabitos => ', meta);
    } else {
      console.error('error');
    }
  };
  const loadMesesGestion = async (gestion, id_habito) => {
    console.log('gestion', gestion);
    console.log('id_habito', id_habito);
    try {
      const response = await fetch(
        urlControlHavitAPI +
          `api/calendarV1?year=${gestion}&habit=${id_habito}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const loadMesesGestionRender = async (gestion, id_habito) => {
    const {cod_resp, calendarArray, year, descripcion_habito} =
      await loadMesesGestion(gestion, id_habito);
    if (cod_resp == 200) {
      setYearCalendar(year);
      setMesesGestion(calendarArray);
      console.log('year: ', year);
      console.log('calendarArray: ', calendarArray);
      setNuevaCategoriaVisible(false);
      setListaCategoriasVisible(false);
      setNuevaHabitoVisible(false);
      setListaHabitosVisible(false);
      setRegistrarHabitosDiariosVisible(false);
      setHistorialHabitosVisible(false);
      setCaledarVisible(true);
      setDescHabito(descripcion_habito);
    } else {
      console.error('error');
    }
  };

  const loadCategoriasNuevoHabitoR = async () => {
    try {
      const {cod_resp, lista_categorias} = await loadCategorias();
      if (cod_resp == 200) {
        setArrayModal([
          {
            ID_CATEGORIAHABITOS: -1,
            DESCRIPCION: 'Mostrar todas las categorias',
          },
          ...lista_categorias,
        ]);
        setId('ID_CATEGORIAHABITOS');
        setValue('DESCRIPCION');
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadHabitos = async (pag, id_cat) => {
    try {
      console.log(
        urlControlHavitAPI +
          'api/getListaHabitos/1/' +
          id_cat +
          '?page=' +
          pag +
          '&per_page=5',
      );
      const response = await fetch(
        urlControlHavitAPI +
          'api/getListaHabitos/1/' +
          id_cat +
          '?page=' +
          pag +
          '&per_page=5',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const loadHabitosFiltro = async (pag, id_categoria, desc_habito) => {
    try {
      console.log(
        urlControlHavitAPI +
          'api/getListaHabitosFiltro/1/' +
          id_categoria +
          '/' +
          desc_habito +
          '?page=' +
          pag +
          '&per_page=5',
      );
      const response = await fetch(
        urlControlHavitAPI +
          'api/getListaHabitosFiltro/1/' +
          id_categoria +
          '/' +
          desc_habito +
          '?page=' +
          pag +
          '&per_page=5',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const loadHabitosListaHabitosFiltro = async (
    pag,
    id_categoria = -1,
    desc_habito = '%20',
  ) => {
    try {
      const {cod_resp, lista_habitos, meta} = await loadHabitosFiltro(
        pag,
        id_categoria,
        desc_habito,
      );
      if (cod_resp == 200) {
        setListaHabitos(lista_habitos);
        setPaginacionHabitos(meta);
        console.log('meta: ', meta);
      } else {
        console.log('Error');
      }
    } catch (error) {
      throw error;
    }
  };
  const loadHabitosListaHabitos = async (pag, cat = -1) => {
    try {
      const {cod_resp, lista_habitos, meta} = await loadHabitos(pag, cat);
      if (cod_resp == 200) {
        setListaHabitos(lista_habitos);
        setPaginacionHabitos(meta);
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDataMenuItemPassData = id => {
    switch (id) {
      case 1: //Nueva Categoria
        setNuevaCategoriaVisible(true);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(false);
        setCaledarVisible(false);
        break;
      case 2: //Lista Categorias
        loadCategoriasListaCategorias();
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(true);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(false);
        setCaledarVisible(false);
        break;
      case 3: //Nuevo habito
        setPlaceHolderNuevoHabito('Seleccione una categoria');
        setCategoriaSelected(-1);
        setListaHabitos([]);
        setPaginacionHabitos({});
        loadCategoriasNuevoHabito();
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(true);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(false);
        setCaledarVisible(false);
        break;
      case 4: //Lista de habitos
        dispatch(setPageActive(1));
        setCategoriaSelected(-1);
        setPaginacionHabitos({});
        loadHabitosListaHabitos(1);
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(true);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(false);
        setCaledarVisible(false);
        break;
      case 5: //Registrar habitos diarios
        setPlaceHolderNuevoHabito('Seleccione una categoria');
        setCategoriaSelected(-1);
        setPaginacionHabitos({});
        setListaHabitos([]);
        loadCategoriasNuevoHabitoR();
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(true);
        setHistorialHabitosVisible(false);
        setCaledarVisible(false);
        break;
      case 6: //Historial registro diario
        console.log('--> Historial registro diario <--');
        loadHistoricoHabitosDiariosRender(1);
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(true);
        setCaledarVisible(false);
        break;
      case 7: //Calendario
        loadMesesGestionRender();
        setNuevaCategoriaVisible(false);
        setListaCategoriasVisible(false);
        setNuevaHabitoVisible(false);
        setListaHabitosVisible(false);
        setRegistrarHabitosDiariosVisible(false);
        setHistorialHabitosVisible(false);
        setCaledarVisible(true);
        break;
    }
  };
  const closeModal = () => {
    dispatch(setModalVisible(false));
  };
  const onClickFlatList = (id, value) => {
    setPlaceHolderNuevoHabito(value);
    setCategoriaSelected(id);
    closeModal();
    dispatch(setPageActive(1));
    if (RegistrarHabitosDiariosVisible) {
      console.log('Pantalla Registro habitos');
      loadHabitosListaHabitosFiltro(1, id);
      //loadHabitosListaHabitos(1, id)
    }
  };
  const cleanFieldCategorySelected = () => {
    setPlaceHolderNuevoHabito('Seleccione una categoria');
    setCategoriaSelected(-1);
  };
  const changePage = pag => {
    if (RegistrarHabitosDiariosVisible) {
      console.log(
        'RegistrarHabitosDiariosVisible: ',
        RegistrarHabitosDiariosVisible,
      );
      loadHabitosListaHabitosFiltro(pag, categoriaSelected);
    } else if (HistorialHabitosVisible) {
      loadHistoricoHabitosDiariosRender(pag);
    } else {
      loadHabitosListaHabitos(pag, categoriaSelected);
    }
  };
  const searchHabitosByFilter = desc_habito => {
    loadHabitosListaHabitosFiltro(1, categoriaSelected, desc_habito);
  };
  const searchHabitosOnCalendar = id_habito => {
    //Validar que el tamaño del array sea de longitud uno
    loadMesesGestionRender(2024, id_habito[0].ID_HABITO);
  };
  return (
    <View style={styles.mainContainer}>
      <Modal
        showScreen={modalVisible}
        setData={arrayModal}
        id={id}
        value={value}
        closeModal={closeModal}
        onClickFlatList={onClickFlatList}
      />
      <Header onClickItemMenuPassData={handleDataMenuItemPassData} />
      <NuevaCategoria showScreen={NuevaCategoriaVisible} />
      <ListaCategorias
        showScreen={ListaCategoriasVisible}
        listaCategorias={listaCategoria}
      />
      <NuevoHabito
        showScreen={NuevaHabitoVisible}
        placeHolder={placeHolderNuevoHabito}
        idCategoriaSelected={categoriaSelected}
        cleanFieldCategorySelected={cleanFieldCategorySelected}
      />
      <ListaHabitos
        showScreen={ListaHabitosVisible}
        listaHabitos={listaHabitos}
        paginacionHabitos={paginacionHabitos}
        changePage={changePage}
      />
      <RegistrarHabitosDiarios
        searchHabitosOnCalendar={searchHabitosOnCalendar}
        searchHabitosByFilter={searchHabitosByFilter}
        showScreen={RegistrarHabitosDiariosVisible}
        placeHolder={placeHolderNuevoHabito}
        listaHabitos={listaHabitos}
        paginacionHabitos={paginacionHabitos}
        changePage={changePage}
      />
      <HistorialHabitos
        showScreen={HistorialHabitosVisible}
        listaSeguimiento={listaSeguimiento}
        paginacionHabitos={paginacionHabitos}
        changePage={changePage}
      />
      <CalendarHabit
        descHabito={descHabito}
        showScreen={CaledarVisible}
        year={yearCalendar}
        mesesGestion={mesesGestion}
      />
      <Toast position="bottom" bottomOffset={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    flexDirection: 'column',
  },
});

export default Main;
