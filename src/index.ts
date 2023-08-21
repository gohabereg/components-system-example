import {HomePage} from './pages/Home';
import {Button} from './components/Button';
import {registerComponent} from "./utils/resgiterComponent";
import Card from "./components/Card";
import {render} from "./utils/render";

registerComponent('Button', Button);
registerComponent('Card', Card);

window.addEventListener('DOMContentLoaded', () => {
  render('home')
});

