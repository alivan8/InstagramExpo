import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../SeleccionarImagen';
import {  actionCargarImagenPublicacion,actionSubirPublicacion, actionLimpiarImagenPublicacion } from '../../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

 class SeleccionarGaleria extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
//antes de que el componente sea destruido,cancelar lladas a la red, compoenntes que hayan sido llamados
  componentWillMount(){
      this.props.limpiarImagen();
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imagen}>
        <SeleccionarImagen
          imagen={this.props.imagen.imagen}
          cargar={this.props.cargarImagen}
          radius
        />
      </View>
      <View style={styles.texto}>
        <SeleccionarGaleriaForm
          imagen={this.props.imagen.imagen}
          registro={(values) => {
            this.props.subirPublicacion(values);
          }}
        /> 
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
});

const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
});

const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
  subirPublicacion:(values)=>{
    dispatch(actionSubirPublicacion(values)); 
  },
  limpiarImagen :() =>{
    dispatch(actionLimpiarImagenPublicacion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);