import {takeEvery, call,select} from 'redux-saga/effects';
import {autenticacion, baseDatos} from '../Servicios/Firebase';
import CONSTANTES from '../../Store/CONSTANTES';

   // JSON:parse es para convertir una cadena a objeto
    // JSON:stringify  sirve para convertir un objeto a cadena
    // const {user: {uid, email},} = JSON.parse(registro);
    //console.log('valores:' + JSON.stringify(values));

    //saga es un middleware, por lo tanto tenemos acceso tanto al store como al dispatch por medio de un select


const registroEnFirebase = values =>
  autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => JSON.stringify(success));

const registroEnBaseDeDatos = ({uid, email, nombre,fotoURL}) =>
  baseDatos.ref(`usuarios/${uid}`).set({
    email,
    nombre,
    fotoURL,
  });

 const registroFotoCloudinary =({imagen})=>{

    const {uri,type} = imagen;
    const splitName = uri.split('/');
    const name = [...splitName].pop();
  
    const foto ={
      uri,
      type:`${type}/jpg`,
      name,
    }
    console.log(foto);
    const formImagen = new FormData();
    formImagen.append('upload_preset',CONSTANTES.CLOUDINARY_PRESET);
    formImagen.append('file',foto);

   

    return fetch(CONSTANTES.CLOUDINARY_NAME,{
      method: 'POST',
      body:formImagen,
    }).then(response=>
        response.json());

    

  }


function* sagaRegistro(values) {
  try {

    const imagen =yield select((state)=>state.reducerImagenSignUp);
    //console.log(imagen);
    const urlFoto = yield call (registroFotoCloudinary, imagen);
    const fotoURL = urlFoto.secure_url;
    const registro= yield call(registroEnFirebase,values.datos);
    const {user: {uid, email},} = JSON.parse(registro);
    const { datos: {nombre}, } = values;

    yield call(registroEnBaseDeDatos,{
        uid,email,nombre,fotoURL,
    });
    
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
function* sagaSubirPublicacion(values){
    try {
      const imagen = yield select(state =>state.reducerImagenPublicacion);
      console.log(imagen);
      console.log('valores saga subirPublicacion'+JSON.stringify(values));
      const resultadoImagen = yield call(registroFotoCloudinary,imagen );
      console.log(resultadoImagen);
    } catch (error) {
      console.log(error);
    }
}


export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTES.SUBIR_PUBLICACION,sagaSubirPublicacion);
  // yield ES6
  console.log('Desde nuestra función generadora');
}
