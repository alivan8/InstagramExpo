import React, {Component} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

export default class Add extends Component {
 

  render() {
    return (
      <View style={styles.container}>
       <Button
          title="Seleccionar galería"
          onPress={() => {
            navigation.navigate('Seleccion');
          }}
        />
        <Text>Add</Text>
        <Button
          title="Tomar Foto"
          onPress={() => {
            navigation.navigate('Seleccion');
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
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});
