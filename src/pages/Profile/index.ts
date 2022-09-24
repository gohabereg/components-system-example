import Block from '../../utils/Block';
import template from './profile.hbs';
import { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { User } from '../../api/AuthAPI';
import { ProfileField } from '../../components/ProfileField';

interface ProfileProps extends User {}

const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof ProfileProps>;

class ProfilePageBase extends Block<ProfileProps> {
  init() {
    this.children.fields = userFields.map(name => {
      return new ProfileField({ name, value: this.props[name] });
    });

    this.children.logoutButton = new Button({
      label: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        }
      }
    })
  }

  protected componentDidUpdate(oldProps: ProfileProps, newProps: ProfileProps): boolean {
    /**
     * Обновляем детей
     */
    (this.children.fields as ProfileField[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] });
    });

    /**
     * Другой вариант — просто заново создать всех детей. Но тогда метод должен возвращать true, чтобы новые дети отрендерились
     *
     * this.children.fields = userFields.map(name => {
     *   return new ProfileField({ name, value: newProps[name] });
     * });
     */

    /**
     * Так как мы обновили детей, этот компонент не обязательно рендерить
     */
    return false;
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);
