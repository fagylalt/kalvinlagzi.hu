export type TileConfig = {
  label: string;
  backgroundImage?: string;
  blur?: boolean;
} & ({ hash: string; href?: never } | { href: string; hash?: never });

export const Tile = (config: TileConfig): HTMLElement => {
  const link = document.createElement("a");
  link.className =
    "group relative flex items-center justify-center aspect-[3/4] w-[min(480px,30vw)] max-xl:w-[min(280px,38vw)] rounded-xl overflow-hidden bg-[#f0ebe3] border-2 border-[#2a2a2a] no-underline text-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]";

  if (config.href) {
    link.href = config.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = `#${config.hash}`;
  }

  if (config.backgroundImage) {
    const bg = document.createElement("div");
    bg.className = `absolute inset-0 bg-cover bg-center transition-all duration-300${config.blur ? " blur-[2px] scale-105 group-hover:blur-none group-hover:scale-100" : ""}`;
    bg.style.backgroundImage = `url(${config.backgroundImage})`;

    if (config.blur) {
      link.addEventListener("touchstart", () => {
        bg.classList.remove("blur-[2px]", "scale-105");
        bg.classList.add("blur-none", "scale-100");
      });
      link.addEventListener("touchend", () => {
        bg.classList.remove("blur-none", "scale-100");
        bg.classList.add("blur-[2px]", "scale-105");
      });
    }

    link.appendChild(bg);
  }

  const label = document.createElement("span");
  label.className =
    "font-fancy font-bold relative z-10 self-center text-3xl max-xl:text-base max-md:text-sm tracking-wide whitespace-nowrap px-10 py-5 max-xl:px-4 max-xl:py-2 max-md:px-3 max-md:py-1.5 bg-white/75 rounded-md backdrop-blur-sm";
  label.textContent = config.label;
  link.appendChild(label);

  return link;
};
