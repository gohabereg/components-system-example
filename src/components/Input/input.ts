import Block from '../../utils/Block';
import template from './input.hbs';
import styles from './styles.module.pcss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
