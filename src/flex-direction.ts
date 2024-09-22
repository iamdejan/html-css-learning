const toggle = document.querySelector("#flex-direction-toggle") as HTMLInputElement|null;

toggle?.addEventListener("change", () => {
  const direction = toggle.checked? "column": "row";
  const root = document.querySelector("div.flex-direction-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);

  const toggleText = document.querySelector("span#direction") as HTMLSpanElement|null;
  if(toggleText) {
    toggleText.textContent = direction;
  }
});
