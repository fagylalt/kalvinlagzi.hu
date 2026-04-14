export const Hero = (): HTMLElement => {
  const section = document.createElement("section");
  section.className = "relative min-h-screen flex items-center justify-center p-8";

  const back = document.createElement("a");
  back.href = "#";
  back.className =
    "absolute top-6 left-6 font-serif text-base text-[#2c2c2c] no-underline px-3 py-1.5 bg-white/75 rounded-md backdrop-blur-sm transition-colors hover:bg-white/95";
  back.textContent = "\u2190 Vissza";
  section.appendChild(back);

  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-2 gap-8 items-center justify-items-center max-md:grid-cols-1 max-md:gap-6";
  grid.innerHTML = `
    <img class="max-w-full h-auto" src="/front.png" />
    <img class="max-w-full h-auto" src="/back.png" />
  `;
  section.appendChild(grid);

  return section;
};
