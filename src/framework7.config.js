import {
  Panel, Preloader, Toast, Fab
} from 'framework7';

export default (Framework7) => {

  Framework7
    .use(Panel)
    .use(Toast)
    .use(Fab)
    .use(Preloader);
  
};