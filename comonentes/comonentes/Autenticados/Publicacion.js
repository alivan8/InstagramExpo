import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,Dimensions,Image} from 'react-native';

export default class Publicacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation,item} = this.props;
    const {width} = Dimensions.get('window');
          const factor = item.width /width;
          const height= item.height/factor;
          
    return (
      <View >
        <View>
          <Text>{item.uidd}</Text>
        </View>
          
          <Image
            source={{uri:item.secure_url}}
            style={{width:width,height}}
          />
        {/* <Text> Publicacion </Text>
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
        /> */}
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
