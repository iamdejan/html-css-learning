const toggle = document.querySelector("#flexbox-toggle") as HTMLInputElement|null;

toggle?.addEventListener("change", () => {
  const display = toggle.checked? "flex": "block";
  const root = document.querySelector("div.root");
  root?.setAttribute("display", display);
});
