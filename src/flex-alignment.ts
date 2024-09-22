const flexDirectionSelect = document.querySelector("#flex-direction-select") as HTMLInputElement|null;
const alignmentSelect = document.querySelector("#alignment-select");

flexDirectionSelect?.addEventListener("change", (event) => {
  const direction = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-alignment-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);
});

alignmentSelect?.addEventListener("change", (event) => {
  const alignment = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-alignment-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("justify-content", alignment);
});
