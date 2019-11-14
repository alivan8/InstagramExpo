import {createStackNavigator} from 'react-navigation-stack';
import Search from './Search';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';

export const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },
});
