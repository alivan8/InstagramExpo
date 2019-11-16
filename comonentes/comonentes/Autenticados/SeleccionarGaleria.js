import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../SeleccionarImagen';
import {  actionCargarImagenPublicacion } from '../../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

 class SeleccionarGaleria extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
            console.log(values);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);