const flexDirectionSelect = document.querySelector("#flex-direction-select") as HTMLInputElement|null;
const primaryAxisAlignmentSelect = document.querySelector("select#primary-axis-alignment-select") as HTMLSelectElement|null;
const crossAxisAlignmentSelect = document.querySelector("select#cross-axis-alignment-select") as HTMLSelectElement|null;

flexDirectionSelect?.addEventListener("change", (event) => {
  const direction = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-alignment-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("flex-direction", direction);
});

primaryAxisAlignmentSelect?.addEventListener("change", (event) => {
  const alignment = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-alignment-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("justify-content", alignment);
});

crossAxisAlignmentSelect?.addEventListener("change", (event) => {
  const alignment = (event.target as HTMLInputElement)?.value as string|null;
  const root = document.querySelector("div.flex-alignment-demo-root") as HTMLDivElement|null;
  root?.style.setProperty("align-items", alignment);
});
