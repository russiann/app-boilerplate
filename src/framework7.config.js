import {
  Panel, Preloader, Toast
} from 'framework7';

export default (Framework7) => {

  Framework7
    .use(Panel)
    .use(Toast)
    .use(Preloader);
  
};