const flexboxToggle = document.querySelector("#flexbox-toggle") as HTMLInputElement|null;

flexboxToggle?.addEventListener("change", () => {
  const display = flexboxToggle.checked? "flex": "block";
  const root = document.querySelector("div.root") as HTMLDivElement|null;
  root?.style.setProperty("display", display);

  const toggleText = document.querySelector("span#display") as HTMLSpanElement|null;
  if(toggleText) {
    toggleText.textContent = display;
  }
});
