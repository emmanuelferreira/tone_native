import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { t } from 'react-native-tailwindcss';

// Components
import BottomNav from './components/BottomNav';

// Pages
import Home from './pages/Home';
import Search from './pages/Search';


// Main App
function App() {
  return (
    <SafeAreaView style={[t.bgGray100, t.flex, t.hFull , t.wFull]}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={Search} />
      </Switch>
      <BottomNav/>
    </SafeAreaView>
  );
}

export default  () => (
  <NativeRouter>
    <App/>
  </NativeRouter>
)
