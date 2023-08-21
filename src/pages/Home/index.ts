import Block from '../../utils/Block';
import template from './home.hbs';
import {render} from "../../utils/render";


export class HomePage extends Block {
  constructor() {
    super({
      type: 'button',

      buttons: [
        {
          label: 'Login', onClick: () => {
            render('login');
          }
        },
        {
          label: 'Button 2'
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
