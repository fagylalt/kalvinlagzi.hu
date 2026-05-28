import "./style.css";
import { Home } from "./components/home";
import { Hero } from "./components/hero";

const app = document.querySelector<HTMLDivElement>("#app")!;

const routes: Record<string, () => HTMLElement> = {
  "": Home,
  "program": Hero,
};

function render() {
  const hash = location.hash.replace("#", "");
  const view = routes[hash] ?? Home;
  app.replaceChildren(view());
}

window.addEventListener("hashchange", render);
render();
