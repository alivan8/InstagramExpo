import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SeleccionarImagen = (props) => {
 const  seleccionarImagen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
     // this.setState({ image: result.uri });
     props.cargar(result);
    }
  };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center',marginTop:35 }}>
      <TouchableOpacity onPress={seleccionarImagen}>
      {
          props.imagen ? (
          <Image source={{uri:props.imagen.uri} }
                  style={{width:160,height:160,borderRadius:80}}
          />):(
          <Image source={require('../../assets/oveja.jpg')} 
                  style={{width:160,height:160,borderRadius:80}}/>)
      }
      </TouchableOpacity>
    </View>
  );
}



export default SeleccionarImagen;

//touchableOpacity => es para que el usuario le de click, 
  

 

  