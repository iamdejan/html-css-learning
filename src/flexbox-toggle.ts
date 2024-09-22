const toggle = document.querySelector("#flexbox-toggle") as HTMLInputElement|null;
const root = document.querySelector("div.root");

toggle?.addEventListener("change", () => {
  const display = toggle.checked? "flex": "block";
  root?.setAttribute("display", display);
});
