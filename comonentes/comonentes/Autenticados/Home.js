import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,FlatList,Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {actionDescargarPublicaciones} from '../../../Store/ACCIONES';
import Publicacion from './Publicacion';

class Home extends Component {
  
  componentDidMount(){
    this.props.descargarPublicaciones(); 
  }




  render() {

    //console.log(this.props.publicaciones);
    const {navigation,autores} = this.props;
   // console.log('autores:'+ autores);
    return (
      <FlatList 
        data={this.props.publicaciones}
        renderItem={({ item,index })=> <Publicacion item={item} autor={autores[index]}/>}
        ItemSeparatorComponent={()=> <View style={styles.separador}/>}
      />
      // <View style={styles.container}>
      //   <Text> Home </Text>
      //   <Button
      //     title="Autor"
      //     onPress={() => {
      //       navigation.navigate('Autor');
      //     }}
      //   />
      //   <Button
      //     title="Comentarios"
      //     onPress={() => {
      //       navigation.navigate('Comentarios');
      //     }}
      //   />
      // </View>
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
  separador :{
    borderWidth:1,
    borderColor:'#C0C0C0',
  },  
});

const mapStateToProps=(state)=>{
  return {
    publicaciones:state.reducerPublicacionesDescargadas ,
    autores:state.reducerAutoresDescargadas,
    
  }
};

const mapDispatchToProps=(dispatch)=> {
  return {
    descargarPublicaciones:()=>{
      dispatch(actionDescargarPublicaciones())
    }
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(Home)