import "./style.scss";

const awesome = document.querySelector("[data-element=awesome]");
const parentBox = document.querySelector('[data-element="parent-box"]');

const intrinsicSwitch = document.querySelector("#intrinsic-switch") as HTMLInputElement | null;

intrinsicSwitch?.addEventListener("change", () => {
  awesome?.setAttribute("data-sizing", intrinsicSwitch.checked? "intrinsic": "extrinsic");
  parentBox?.setAttribute("data-sizing", intrinsicSwitch.checked? "intrinsic": "extrinsic");
});
