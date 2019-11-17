import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,Dimensions,Image} from 'react-native';

export default class Publicacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log('autor PUblicacion:'+ JSON.stringify(this.props.autor));
    const {navigation,item,autor} = this.props;
    const {width} = Dimensions.get('window');
          const factor = item.width /width;
          const height= item.height/factor;

    return (
      <View >
        <View style={styles.header}>
          <Image
            source={{uri:autor.fotoURL}}
            style={{width:45,height:45,borderRadius:24}}
            />
          <Text>{autor.nombre}</Text>
        </View>
          <Image
            source={{uri:item.secure_url}}
            style={{width:width,height}}
           />
        <View>
          <Text>like</Text>
          <Text>comentarios</Text>
        </View>
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
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:16,
    marginBottom:16,
  }
});
