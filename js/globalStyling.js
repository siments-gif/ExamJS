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