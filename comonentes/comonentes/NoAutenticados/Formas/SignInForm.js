import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';

//onchange  =
const fieldNombre = props => {
 return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={
          props.input.name == 'correo' ? 'email-address' : 'default'
        }
        autoCapitalize="none"
        secureTextEntry={
          !!(
            props.input.name == 'password' || props.input.name == 'confirmacion'
          )
        }
        onBlur={props.input.onBlur}
      />
      <View style={styles.linea} />

      {props.meta.touched && props.meta.error && (
        <Text style={styles.errors}>{props.meta.error}</Text>
      )}
    </View>
  );
};

const validate = values => {
  const errors = {};

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'correo invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'se requiere al menos 5 caracteres';
  }

  return errors;
};

const SignInForm = props => {
  return (
    <View>
      <Field name="correo" component={fieldNombre} ph="correo" />
      <Field name="password" component={fieldNombre} ph="******" />
      <Button title="Sign In" onPress={props.handleSubmit(props.login)} />
    </View>
  );
};

const styles = StyleSheet.create({
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  textinput: {
    marginBottom: 15,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);

//reduxForm  = pasa las propiedades a SingUpform para que puedas usarlas
