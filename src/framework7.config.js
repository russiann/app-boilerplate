import {
  Panel, Preloader, Toast, Fab, Dialog, Input, DataTable, Checkbox, Form
} from 'framework7';

export default (Framework7) => {

  Framework7
    .use(Panel)
    .use(Toast)
    .use(Fab)
    .use(Dialog)
    .use(Input)
    .use(DataTable)
    .use(Checkbox)
    .use(Form)
    .use(Preloader);
  
};