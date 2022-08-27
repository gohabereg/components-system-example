import { HomePage } from './pages/Home';
import { Button } from './components/Button';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const homePage = new HomePage({ title: 'Home page' });

  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});

