import {takeEvery, call} from 'redux-saga/effects';
import {autenticacion, baseDatos} from '../Servicios/Firebase';
import CONSTANTES from '../../Store/CONSTANTES';
const registroEnFirebase = values =>
  autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => JSON.stringify(success));

const registroEnBaseDeDatos = ({uid, email, nombre}) =>
  baseDatos.ref(`usuarios/${uid}`).set({
    email,
    nombre,
  });

function* generadoraRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);

    // console.log(`registros: ${registro}`);
    const {
      user: {uid, email},
    } = JSON.parse(registro);
    // JSON:parse es para convertir una cadena a objeto
    // JSON:stringify  sirve para convertir un objeto a cadena
    //console.log('valores:' + JSON.stringify(values));
    const {
      datos: {nombre},
    } = values;

    // uid, email, nombre
    yield call(registroEnBaseDeDatos, {uid, email, nombre});
  } catch (error) {
    console.log(error);
  }
}

const loginInFirebase = ({correo, password}) =>
  autenticacion.signInWithEmailAndPassword(correo, password);

function* sagaLogin(values) {
  try {
    console.log(JSON.stringify(values));
    const resultado = yield call(loginInFirebase, values.datos);
    console.log('resultado saga login:' + JSON.stringify(resultado));
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, generadoraRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  // yield ES6
  console.log('Desde nuestra función generadora');
}
