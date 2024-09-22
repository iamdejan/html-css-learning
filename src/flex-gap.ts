const flexGapDirectionSelect = document.querySelector("select#flex-gap-direction-select") as HTMLInputElement|null;
flexGapDirectionSelect?.addEventListener("change", (event) => {
  const direction = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-gap-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);

  const elements = document.querySelectorAll("div.flex-gap-demo-element") as NodeListOf<HTMLDivElement>|null;
  elements?.forEach((element) => {
    element?.setAttribute("direction", direction!);
  });
});

const flexGapInput = document.querySelector("input#flex-gap-value") as HTMLInputElement|null;
flexGapInput?.addEventListener("change", (event) => {
  const gap = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-gap-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("gap", `${gap}px`);
});
