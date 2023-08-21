import Block from '../../utils/Block';
import {render} from '../../utils/render';
import template from './login';
import Handlebars from "handlebars";

export class LoginPage extends Block {
  static template = Handlebars.compile(template);

  constructor() {
    super({
      buttons: [
        {
          label: 'Home', onClick: () => {
            render('home');
          }
        },
        {label: 'Button 2'},
      ]
    });
  }

  render() {
    return this.compile(LoginPage.template, this.props);
  }
}
