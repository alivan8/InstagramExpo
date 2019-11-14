import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './Formas/SignInForm';
import {actionLogin} from '../../../Store/ACCIONES.js';

class SignIn extends Component {
  signinDeUsuario = values => {
    //console.log('valores de signindeUsuario' + JSON.stringify(values));
    this.props.login(values);
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <SignInForm login={this.signinDeUsuario} />
        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate('SignUp');
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

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: datos => {
    dispatch(actionLogin(datos));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
