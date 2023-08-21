import {HomePage} from "../pages/Home";
import {LoginPage} from "../pages/Login";

const ROUTES = {
  'home': HomePage,
  'login': LoginPage,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}