import Block from '../../utils/Block';
import template from './profileField.hbs';

interface ProfileFieldProps {
  name: string;
  value: string | number;
}

export class ProfileField extends Block<ProfileFieldProps> {
  constructor(props: ProfileFieldProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
