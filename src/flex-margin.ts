function setMargin(inputName:string, className: string): void {
  const marginRatioButtons = document.querySelectorAll(`input[name=${inputName}]`) as NodeListOf<HTMLInputElement>;
  marginRatioButtons.forEach((button) => {
    button.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      const checked = target.checked;
      if(checked) {
        const value = target.value;
        const firstElement = document.querySelector(`div${className}:first-child`) as HTMLDivElement;
        firstElement?.style.setProperty(inputName, value);
      }    
    });
  });
}

setMargin("margin-left", ".flex-margin-demo-element");
setMargin("margin-right", ".flex-margin-demo-element");
