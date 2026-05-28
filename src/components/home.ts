import { Tile } from "./tile";

const GOOGLE_FORM_URL = "https://forms.gle/eCugVuB4u6CwsR6v8";

export const Home = (): HTMLElement => {
  const section = document.createElement("section");
  section.className =
    "min-h-screen flex bg-[#5a1a1a] p-2 md:p-4";

  const inner = document.createElement("div");
  inner.className =
    "flex-1 flex items-center justify-center overflow-y-auto bg-gradient-to-br from-[#e8d5c4] via-[#f5ebe0] to-[#d5c4a1]";
  inner.style.boxShadow =
    "inset 0 0 0 1px #5a1a1a, inset 0 0 0 5px #f5ebe0, inset 0 0 0 7px #5a1a1a";

  const tileVisszajelzes = Tile({
    label: "Visszajelzés",
    backgroundImage: "/templom.webp",
    blur: true,
    href: GOOGLE_FORM_URL,
  });

  const tileSaveTheDate = Tile({
    label: "Program",
    backgroundImage: "/back.png",
    blur: true,
    hash: "program",
  });

  // Desktop: tile | invitation | tile in a single row
  const desktopRow = document.createElement("div");
  desktopRow.className =
    "hidden xl:flex flex-row items-center gap-4 2xl:gap-8 px-4 2xl:px-8 py-6 2xl:py-8";

  const invitationDesktop = document.createElement("img");
  invitationDesktop.src = "/invitation.png";
  invitationDesktop.alt = "Meghívó";
  invitationDesktop.className =
    "w-[min(600px,30vw)] h-auto object-contain rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.2)]";

  desktopRow.appendChild(tileVisszajelzes);
  desktopRow.appendChild(invitationDesktop);
  desktopRow.appendChild(tileSaveTheDate);

  // Mobile: invitation on top, two tiles in a row below
  const mobileStack = document.createElement("div");
  mobileStack.className =
    "flex xl:hidden flex-col items-center gap-6 px-6 py-8";

  const invitationMobile = document.createElement("img");
  invitationMobile.src = "/invitation.png";
  invitationMobile.alt = "Meghívó";
  invitationMobile.className =
    "w-[calc(2*min(280px,38vw)+1rem)] h-auto object-contain rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.2)]";

  const mobileTileRow = document.createElement("div");
  mobileTileRow.className = "flex flex-row gap-4 items-stretch justify-center";
  mobileTileRow.appendChild(
    Tile({
      label: "Visszajelzés",
      backgroundImage: "/templom.webp",
      blur: true,
      href: GOOGLE_FORM_URL,
    })
  );
  mobileTileRow.appendChild(
    Tile({
      label: "Program",
      backgroundImage: "/back.png",
      blur: true,
      hash: "program",
    })
  );

  mobileStack.appendChild(invitationMobile);
  mobileStack.appendChild(mobileTileRow);

  inner.appendChild(desktopRow);
  inner.appendChild(mobileStack);
  section.appendChild(inner);
  return section;
};
