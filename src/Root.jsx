import { h } from 'preact';
import F7 from 'framework7';
import { Framework7, View, Router, Route } from 'preact-f7';

import HomePage from './scenes/Home';
import CompaniesList from './scenes/Companies/list';
import CompaniesCreate from './scenes/Companies/create';
import Signup from './scenes/Signup';

const params = {
  view: { pushState: false }
};

const Root = () => (
  <Framework7 F7={F7} params={params}>
    <View>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/companies" component={CompaniesList} />
        <Route path="/companies/new" component={CompaniesCreate} />
        <Route path="/signup" component={Signup} />
      </Router>
    </View>
  </Framework7>
);

export default Root;