import { h } from 'preact';
import F7 from 'framework7';
import { Framework7, View, Router, Route } from 'preact-f7';

import HomePage from './scenes/Home';

const params = {
  view: { pushState: true }
};

const Root = () => (
  <Framework7 F7={F7} params={params}>
    <View>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </View>
  </Framework7>
);

export default Root;