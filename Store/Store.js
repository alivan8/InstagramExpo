import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';

const reducerPruebas = (state = [], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];

    default:
      return state;
  }
};

const reducerSesion = (state = null, action) => {
  switch (action.type) {
    case CONSTANTES.ESTABLECER_SESION:
      return action.usuario;
    case CONSTANTES.CERRAR_SESION:
      return null;

    default:
      return state;
  }
};

// En el reducer guardaremos  la informacion

const reducerImagenSignUp = (state ={imagen:null},action) =>{

    switch (action.type) {
      case CONSTANTES.CARGAR_IMAGEN_SIGNUP:
          return {imagen:action.imagen};
      case CONSTANTES.LIMPIAR_IMAGEN_SIGNUP:
              return {imagen:null};
      default:
        return state;
    }

}

const reducerImagenPublicacion = (state = { imagen: null }, action) => {
  switch (action.type) {
    case CONSTANTES.CARGAR_IMAGEN_PUBLICACION:
      return { imagen: action.imagen };
    case CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION:
      return { imagen: null };
    default:
      return state;
  }
};

//funciones generadoras

const reducerPublicacionesDescargadas = (state=[],action) =>{
    switch (action.type) {
      case CONSTANTES.AGREGAR_PUBLICACIONES_STORE:
        return [...state,...action.publicaciones];
      default:
        return state;
    }
}

const reducerAutoresDescargadas = (state=[],action) =>{
  switch (action.type) {
    case CONSTANTES.AGREGAR_AUTORES_STORE:
      return [...state,...action.autores ];
    default:
      return state;
  }
}
const sagaMiddleware = createSagaMiddleware();
//reducerSesion y esas cosas representan nuestrao state
const reducers = combineReducers({
  reducerAutoresDescargadas,
  reducerPublicacionesDescargadas,
  reducerImagenPublicacion,
  reducerImagenSignUp,
  reducerSesion,
  reducerPruebas,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;
