import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import Welcome from './pages/Welcome';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      Main,
      NewEntry,
      Report,
      Welcome,
    },
    {
      initialRouteName: 'Welcome',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
