import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {RutasNoAutenticadas} from './comonentes/comonentes/NoAutenticados/RutasNoAutenticadas';
import {connect} from 'react-redux';
import {autenticacion} from './Store/Servicios/Firebase';
import {RutasAutenticadas} from './comonentes/comonentes/Autenticados/RutasAutenticadas';
import {actionEstablecerSesion, actionCerrarSesion} from './Store/ACCIONES';

const RutasNoaut = createAppContainer(RutasNoAutenticadas);
const RutasAut = createAppContainer(RutasAutenticadas);
class Seleccion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAut/>:  <RutasNoaut />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//aca jalamos de store
const mapStateToProps = state => {
  return {
    usuario: state.reducerSesion,
  };
};

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged(function(usuario) {
      if (usuario) {
        console.log(usuario);
        dispatch(actionEstablecerSesion(usuario));
      } else {
        dispatch(actionCerrarSesion());
      }
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Seleccion);
