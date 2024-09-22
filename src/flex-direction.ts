const toggle = document.querySelector("#flex-direction-toggle") as HTMLInputElement|null;
const root = document.querySelector("div.flex-direction-demo-root");

toggle?.addEventListener("change", () => {
  const direction = toggle.checked? "column": "row";
  root?.setAttribute("flex-direction", direction);
});
