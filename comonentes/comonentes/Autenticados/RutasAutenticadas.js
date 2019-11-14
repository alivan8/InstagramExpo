import {createBottomTabNavigator} from 'react-navigation-tabs';
import {StackHome} from './StackHome';
import {StackFollow} from './StackFollow';
import Profile from './Profile';
import Add from './Add';
import Search from './Search';
import {createAppContainer} from 'react-navigation';
import {StackSearch} from './StackSearch';
//const Home = createAppContainer(StackHome);

//const Search = createAppContainer(StackSearch);

export const RutasAutenticadas = createBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
});
