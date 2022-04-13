const inputBox = document.querySelector("input")
const submitBtn = document.getElementById("submit-btn")
const todos = document.getElementById("todos")

let submitform = document.getElementById("add-task).addEventListener("submit", function(event){
    event.preventDefault()

})

submitBtn.addEventListener("click", function() {
    const node = document.createElement("li")
    const textNode = document.createElement("span")
    const textNode = document.createElement("button")
    const crossBtn = document.createElement("span")

    textNode.append(document.createTextNode(inputBox,value))
    crossBtn.classList.add("cross-btn")

    textNode.classList.add("text-todo")
    crossBtn.appendChild(document.createTextNode("\u2716"))

    node.appendChild(ticketHidden)
    node.appendChild(textNode)
    node.appendChild(crossBtn)

    document.getElementById("todos").appendChild(node)
    inputBox.value = ''
    console.log("Clicked")

    crossBtn.addEventListener("click", function() {
        //const strikeTextNode = document.createElement("span")
        //const strikeText = document.createElement("s")
        const tickvisible = document.createElement("span")

        tickvisible.classList.add("tick")
        tickvisible.appendChild(document.createTextNode("\u2716"))
        // strikeText.appendChild(document.createTextNode(inputBox.value))
        // strikeText.classList.add("ttext-todo")
        //strikeNode.appendChild(strikeText)
        //textNode.replaceWith(strikeTextNode)
        tickHidden.replaceWith(tickvisible)
        textNode.classList.add("strike")
    })
})