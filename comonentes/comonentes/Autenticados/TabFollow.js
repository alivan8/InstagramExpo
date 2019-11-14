import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Follow from './Follow';

export const TabFollow = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },
  },
  {
    tabBarPosition: 'top',
  },
);
