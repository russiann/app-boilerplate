import { h } from 'preact';
import { Framework7, View, Router, Route, Panel } from 'preact-f7';

import Signin from './scenes/Signin';
import Drawer from './scenes/Drawer';
import HomePage from './scenes/Home';
import UsersList from './scenes/Users/list';
import UsersCreate from './scenes/Users/create';
import UsersEdit from './scenes/Users/edit';
import Signup from './scenes/Signup';
import NotFound from './scenes/NotFound';
import { startAuthentication } from './feathers';

/**
|--------------------------------------------------
| Framework7
|--------------------------------------------------
*/

import F7 from 'framework7/dist/js/framework7.min';
// import configF7 from './framework7.config';

// configF7(F7);

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

const params = {
  // theme: 'md',
  view: { pushState: false, animate: true, preloadPreviousPage: false }
};

const Container = ({theme = 'black', children}) => (
  <div class={`color-theme-${theme}`} style={{width: '100%', height: '100%'}} >{children}</div>
);


/**
|--------------------------------------------------
| Temporary Fix
|--------------------------------------------------
*/

const auth = () => {
  
  if (window.store.getState().authentication.isSignedIn) {
    return true;
  }

  return new Promise(resolve => {
    startAuthentication()
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve({ redirectTo: '/signup'});
      })
  });
}

const Root = () => (
  <Container>
    <Framework7 F7={F7} params={params}>
      <div class="panel-backdrop"></div>
      <Panel left cover component={<Drawer />} />
      <View>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/signin" component={Signin} />
          <Route path="/users" component={UsersList} protected={auth} />
          <Route path="/users/new" component={UsersCreate} />
          <Route path="/users/:id" component={UsersEdit} />
          <Route path="/signup" component={Signup} />
          <Route path="(.*)" component={NotFound} />
        </Router>
      </View>
    </Framework7>
  </Container>
);

export default Root;