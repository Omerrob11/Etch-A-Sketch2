// HTML elements reference

const gridContainer = document.querySelector(".grid");
const gridSizeBtn = document.querySelector(".grid_size");
let size = 16;

// Grid function

function gridCreation () {
    for (let i = 1; i <= size*size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.toggle("grid_item");
        let definedWitdth = 100/size + "%"
        gridItem.style.width = definedWitdth;

        appendElement(gridContainer,gridItem);
        addOnHoverListener(gridItem);
    }
}



// elements function

function appendElement (container,child) {
    container.appendChild(child);
}

function setWidth(size) {
    item.style.width = 100/size;
}

// Event listeneres
function addOnHoverListener(item) {
    item.addEventListener("mouseover" , (e) => {
        item.classList.add("hover")
    })
}


gridSizeBtn.addEventListener("click", (e) => {
    reset()
     size = +prompt("choose a new size");
    if (size >100) {
        size = 16;
    }
    debugger;
    gridCreation();

})

// reset
    function reset() {
        for (i = 1; i <= size*size; i++) {
            gridContainer.removeChild(gridContainer.lastChild)
        }
    }
// function calls
gridCreation();



// to remove event listeners 
// first you add
// once it's getting "hoverd", it will then listen call the function, and will do what needed
// meaning- it will only call the function , when you over - so when it does, you can remove it

/* function hoverAnElement (e) {
    e.target.classList.toggle("hover");
    e.target.removeEventListener("mouseover",hoverAnElement);
    console.log("haha");
} */