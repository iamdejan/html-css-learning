import "./style.scss";

const flexboxToggle = document.querySelector("#flexbox-toggle") as HTMLInputElement|null;
const root = document.querySelector("div.root");

flexboxToggle?.addEventListener("change", () => {
  const display = flexboxToggle.checked? "flex": "block";
  root?.setAttribute("display", display);
});
