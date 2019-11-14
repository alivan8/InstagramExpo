import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

export const StackHome = createStackNavigator({
  Home: {
    screen: Home,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
});
