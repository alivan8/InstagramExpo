import React, {Component} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

export default class Add extends Component {
 

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
       <Button
          title="Seleccionar galería"
          onPress={() => {
            navigation.navigate('seleccion');
          }}
        />
        <Text>Add</Text>
        <Button
          title="Tomar Foto"
          onPress={() => {
            navigation.navigate('seleccion');
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
