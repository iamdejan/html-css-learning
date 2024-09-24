const childrenNumberInput = document.querySelector("#grid-basic-demo input") as HTMLInputElement|null;
childrenNumberInput?.addEventListener("change", (event) => {
  const target = event.target as HTMLInputElement;
  const value = Number.parseInt(target.value);

  const parent = document.querySelector("#grid-basic-demo div.parent") as HTMLDivElement|null;
  if(parent) {
    parent.innerHTML = "";
    
    for (let i = 1; i <= value; i++) {
      const child = `<div class="children"></div>`;
      parent.innerHTML += child;
    }
  }
});
