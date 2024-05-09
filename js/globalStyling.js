export function bodyStyle() {
    document.body.style.backgroundColor = "#c0c0c0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";  
}

export function styleButtons () {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.style.display = "block"
        button.style.width = "fit-content"
        button.style.margin = "auto"
        button.style.marginTop = "5px"
        button.style.marginBottom = "10px"

        button.style.cursor = "pointer"
        button.style.borderWidth = ".3rem"
    }) 
 }

 export function titleStyles() {
    const titles = document.querySelectorAll("h1, h2")
    titles.forEach(title => {
        let titleText = title.textContent
        
        titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1);

        title.textContent = titleText;
    })
 }

 export function formStyling() { 
    const formSection = document.querySelector("section");
    formSection.style.display = "grid"
    formSection.style.gridTemplateColumns = "1fr"
    formSection.style.width = "40%"
    formSection.style.margin = "0 auto"
    
    const form = document.querySelector("form")
    form.style.backgroundColor = "#618e97"
    form.style.display = "grid";
    form.style.gap = ".8rem"
    form.style.marginTop = "4rem"
    form.style.justifyContent = "center"
    form.style.alignItems = "center"

    form.style.border = "5px solid black"
    form.style.borderRadius = "5rem"
 }

