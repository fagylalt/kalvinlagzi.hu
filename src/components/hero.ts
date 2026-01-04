export const Hero = (): HTMLElement => {
    const section = document.createElement("section");
    section.className = "hero";
  
    section.innerHTML = `
      <div class="hero-grid">
        <img src="/front.png" />
        <img src="/back.png" />
      </div>
    `;
  
    return section;
  };
  