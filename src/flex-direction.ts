const toggle = document.querySelector("#flex-direction-toggle") as HTMLInputElement|null;

toggle?.addEventListener("change", () => {
  const direction = toggle.checked? "column": "row";
  const root = document.querySelector("div.flex-direction-demo-root");
  root?.setAttribute("flex-direction", direction);
});
