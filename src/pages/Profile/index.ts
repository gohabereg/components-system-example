import Block from '../../utils/Block';
import template from './profile.hbs';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';

class ProfilePageBase extends Block {
  init() {
    AuthController.fetchUser();

    this.children.button = new Button({
      label: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        }
      }
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);
