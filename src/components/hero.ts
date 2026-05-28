export const Hero = (): HTMLElement => {
  const section = document.createElement("section");
  section.className =
    "min-h-screen flex items-center justify-center bg-[#5a1a1a] p-2 md:p-4";

  const inner = document.createElement("div");
  inner.className =
    "relative w-full h-full min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] flex items-center justify-center overflow-y-auto bg-gradient-to-br from-[#e8d5c4] via-[#f5ebe0] to-[#d5c4a1] p-8 max-md:p-6";
  inner.style.boxShadow =
    "inset 0 0 0 1px #5a1a1a, inset 0 0 0 5px #f5ebe0, inset 0 0 0 7px #5a1a1a";

  const back = document.createElement("a");
  back.href = "#";
  back.className =
    "absolute top-6 left-6 font-serif text-base text-[#2c2c2c] no-underline px-3 py-1.5 bg-white/75 rounded-md backdrop-blur-sm transition-colors hover:bg-white/95 z-10";
  back.textContent = "← Vissza";
  inner.appendChild(back);

  const img = document.createElement("img");
  img.src = "/details-card.png";
  img.alt = "Program";
  img.className =
    "max-w-full max-h-[calc(100vh-6rem)] h-auto w-auto object-contain rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.2)]";
  inner.appendChild(img);

  section.appendChild(inner);
  return section;
};
