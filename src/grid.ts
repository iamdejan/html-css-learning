const childrenNumberInput = document.querySelector("#grid-basic-demo input") as HTMLInputElement|null;
childrenNumberInput?.addEventListener("change", (event) => {
  const target = event.target as HTMLInputElement;
  const value = Number.parseInt(target.value);

  const parent = document.querySelector("div.grid-basic-demo-parent") as HTMLDivElement|null;
  if(parent) {
    parent.innerHTML = "";
    
    for (let i = 1; i <= value; i++) {
      const child = `<div class="grid-basic-demo-children"></div>`;
      parent.innerHTML += child;
    }
  }
});
