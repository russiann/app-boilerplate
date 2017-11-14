import {
  Panel, Preloader, Toast, Fab, Dialog
} from 'framework7';

export default (Framework7) => {

  Framework7
    .use(Panel)
    .use(Toast)
    .use(Fab)
    .use(Dialog)
    .use(Preloader);
  
};