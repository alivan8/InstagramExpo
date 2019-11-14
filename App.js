import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {RutasNoAutenticadas} from './comonentes/comonentes/NoAutenticados/RutasNoAutenticadas';
import {RutasAutenticadas} from './comonentes/comonentes/Autenticados/RutasAutenticadas';
import Store from './Store/Store';
import Seleccion from './Seleccion';

console.disableYellowBox = ['Remote debugger'];
const SignIn = createAppContainer(RutasNoAutenticadas);
const RutasAut = createAppContainer(RutasAutenticadas);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          {/**<SignIn /> */}
          <Seleccion />
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
