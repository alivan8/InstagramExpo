import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {actionDescargarPublicaciones} from '../../../Store/ACCIONES';

class Home extends Component {
  
  componentDidMount(){
    this.props.descargarPublicaciones(); 
  }



  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
        <Button
          title="Comentarios"
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

const mapStateToProps=(state)=>{
  return {
    prop:state.prop,
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