import "./style.css";
import { Hero } from "./components/hero";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.appendChild(Hero());
