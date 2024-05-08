export function bodyStyle() {
    document.body.style.backgroundColor = "Gray";
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

