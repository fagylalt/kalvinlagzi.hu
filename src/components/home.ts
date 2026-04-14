import { Tile } from "./tile";

const GOOGLE_FORM_URL = "https://forms.google.com/your-form";

export const Home = (): HTMLElement => {
  const section = document.createElement("section");
  section.className =
    "h-screen overflow-hidden flex items-center justify-center bg-[#5a1a1a] p-2 md:p-6";

  const inner = document.createElement("div");
  inner.className =
    "w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e8d5c4] via-[#f5ebe0] to-[#d5c4a1]";
  inner.style.boxShadow =
    "inset 0 0 0 2px #5a1a1a, inset 0 0 0 10px #f5ebe0, inset 0 0 0 14px #5a1a1a";

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-4 max-md:py-6 max-md:justify-items-center max-md:h-full max-md:grid-rows-2";

  grid.appendChild(
    Tile({
      label: "Visszajelzés",
      backgroundImage: "/templom.webp",
      blur: true,
      href: GOOGLE_FORM_URL,
    })
  );

  grid.appendChild(
    Tile({
      label: "Save the Date",
      backgroundImage: "/back.png",
      blur: true,
      hash: "save-the-date",
    })
  );

  inner.appendChild(grid);
  section.appendChild(inner);
  return section;
};
