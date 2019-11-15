import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {blur,change} from 'redux-form';
import SignUpForm from './Formas/SignUpForm';
import {actionRegistro} from '../../../Store/ACCIONES';
import {actionCargarImagenSignUp} from '../../../Store/ACCIONES';
import {actionLimpiarImagenSignUp} from '../../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';
import CONSTANTES from '../../../Store/CONSTANTES';

class SignUp extends Component {
  //llamada al servidor
  componentWillMount() {
    this.props.limpiarImagen();
  }



  registroDeUsuario = values => {
    console.log(values);
    this.props.registro(values);
  };

  render() {
    // console.log(this.props.numero);
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen}
         cargar={this.props.cargarImagen} />
        <SignUpForm registro={this.registroDeUsuario} imagen={this.props.imagen.imagen} />        
        <Button
          title="SignIp"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom:20
    
  },
});

// blur = actionCreator (form :string,field:string ,value)
const mapStateToProps = state => ({
  imagen : state.reducerImagenSignUp,
});

const mapDispatchToProps = dispatch => {
  return {
    registro: values => {
      dispatch(actionRegistro(values));
    },
    cargarImagen: (imagen) =>{
      dispatch(actionCargarImagenSignUp(imagen));
      //cambio el valor de este campo : imagen , entonces, ejecutate funcion validation(SignUpForm)
      // verifica tus condiciones
      dispatch(blur('SignUpForm','imagen',Date.now()));
    },
    limpiarImagen: () =>{
      dispatch(actionLimpiarImagenSignUp());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
