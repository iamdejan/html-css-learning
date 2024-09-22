const flexDirectionToggle = document.querySelector("#flex-direction-toggle") as HTMLInputElement|null;
flexDirectionToggle?.addEventListener("change", () => {
  const direction = flexDirectionToggle.checked? "column": "row";
  const root = document.querySelector("div.flex-direction-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);

  const toggleText = document.querySelector("span#direction") as HTMLSpanElement|null;
  if(toggleText) {
    toggleText.textContent = direction;
  }
});
