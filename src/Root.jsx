import { h } from 'preact';
import { Framework7, View, Router, Route, Panel } from 'preact-f7';

import Drawer from './scenes/Drawer';
import HomePage from './scenes/Home';
import CompaniesList from './scenes/Companies/list';
import CompaniesCreate from './scenes/Companies/create';
import Signup from './scenes/Signup';

/**
|--------------------------------------------------
| Framework7
|--------------------------------------------------
*/

import { Framework7 as F7 } from 'framework7';
import configF7 from './framework7.config';

configF7(F7);

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

const params = {
  theme: 'md',
  view: { pushState: true, animate: false, preloadPreviousPage: false }
};

const Container = ({theme = 'black', children}) => (
  <div class={`color-theme-${theme}`} style={{width: '100%', height: '100%'}} >{children}</div>
)

const Root = () => (
  <Container>
    <Framework7 F7={F7} params={params}>
      <div class="panel-backdrop"></div>
      <Panel left cover component={<Drawer />} />
      <View>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/companies" component={CompaniesList} />
          <Route path="/companies/new" component={CompaniesCreate} />
          <Route path="/signup" component={Signup} />
        </Router>
      </View>
    </Framework7>
  </Container>
);

export default Root;