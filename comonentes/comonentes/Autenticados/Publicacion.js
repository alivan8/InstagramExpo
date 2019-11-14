import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Publicacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> Publicacion </Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        />
        <Button
          title="comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
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
    backgroundColor: '#2c3e58',
  },
});
