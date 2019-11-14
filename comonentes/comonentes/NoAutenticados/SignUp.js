import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import {actionRegistro} from '../../../Store/ACCIONES';

class SignUp extends Component {
  //llamada al servidor

  registroDeUsuario = values => {
    console.log(values);
    this.props.registro(values);
  };

  render() {
    // console.log(this.props.numero);
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registroDeUsuario} />

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
  },
});

const mapStateToProps = state => {
  return {
    prop: state.prop,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registro: values => {
      dispatch(actionRegistro(values));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
