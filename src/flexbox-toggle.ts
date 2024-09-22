const toggle = document.querySelector("#flexbox-toggle") as HTMLInputElement|null;

toggle?.addEventListener("change", () => {
  const display = toggle.checked? "flex": "block";
  const root = document.querySelector("div.root") as HTMLDivElement|null;
  root?.style.setProperty("display", display);

  const toggleText = document.querySelector("span#display") as HTMLSpanElement|null;
  if(toggleText) {
    toggleText.textContent = display;
  }
});
