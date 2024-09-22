const flexBasisDirectionSelect = document.querySelector("select#flex-basis-direction-select") as HTMLInputElement|null;
flexBasisDirectionSelect?.addEventListener("change", (event) => {
  const direction = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-basis-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);

  const elements = document.querySelectorAll("div.flex-basis-demo-element") as NodeListOf<HTMLDivElement>|null;
  elements?.forEach((element) => {
    element?.setAttribute("direction", direction!);
  });
});

const firstElementSizeInput = document.querySelector("input#flex-basis-first-property-size") as HTMLInputElement|null;
firstElementSizeInput?.addEventListener("change", (event) => {
  const value = (event.target as HTMLInputElement)?.value as string|null;
  const firstElement = document.querySelector("div.flex-basis-demo-element:first-child") as HTMLDivElement;
  firstElement?.style.setProperty("flex-basis", `${value}px`);
});
