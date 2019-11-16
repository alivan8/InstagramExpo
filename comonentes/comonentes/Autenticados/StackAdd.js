import {createStackNavigator} from 'react-navigation-stack';
import SeleccionarGaleria from './SeleccionarGaleria';
import Add from './Add';



export const StackAdd = createStackNavigator({
    Add:{
        screen:Add,
    
    },
    seleccion:{
      screen:SeleccionarGaleria,  
    },
})