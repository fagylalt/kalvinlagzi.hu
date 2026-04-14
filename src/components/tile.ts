export type TileConfig = {
  label: string;
  backgroundImage?: string;
  blur?: boolean;
} & ({ hash: string; href?: never } | { href: string; hash?: never });

export const Tile = (config: TileConfig): HTMLElement => {
  const link = document.createElement("a");
  link.className =
    "relative flex items-center justify-center aspect-[3/4] max-h-[calc(100vh-6rem)] w-[min(480px,40vw)] max-md:w-auto max-md:h-[calc(60vh-2.5rem)] max-md:max-h-none rounded-xl overflow-hidden bg-[#f0ebe3] border-2 border-[#2a2a2a] no-underline text-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]";

  if (config.href) {
    link.href = config.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = `#${config.hash}`;
  }

  if (config.backgroundImage) {
    const bg = document.createElement("div");
    bg.className = `absolute inset-0 bg-cover bg-center${config.blur ? " blur-[2px] scale-105" : ""}`;
    bg.style.backgroundImage = `url(${config.backgroundImage})`;
    link.appendChild(bg);
  }

  const label = document.createElement("span");
  label.className =
    "relative z-10 self-center font-serif text-2xl max-md:text-base tracking-wide px-4 py-2 max-md:px-6 max-md:py-1.5 bg-white/75 rounded-md backdrop-blur-sm";
  label.textContent = config.label;
  link.appendChild(label);

  return link;
};
