// HTML elements reference

const gridContainer = document.querySelector(".grid");
const gridSizeBtn = document.querySelector(".grid_size");
let size = 16;

// Grid function

function gridCreation () {
    for (let i = 1; i <= size*size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.toggle("grid_item");
        let definedWitdth = setWidth();
        gridItem.style.width = definedWitdth;


        appendElement(gridContainer,gridItem);
        addOnHoverListener(gridItem);
    }
}



// elements function

function appendElement (container,child) {
    container.appendChild(child);
}

function setWidth() {
    return 100/size + "%"
}

function createRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";  
}

// Event listeneres
function addOnHoverListener(item) {
    item.addEventListener("mouseover" , (e) => {
        //item.classList.add("hover");
        let randomColor = createRandomColor();
        item.style.backgroundColor = randomColor;
    })
}


gridSizeBtn.addEventListener("click", (e) => {
    reset()
     size = +prompt("choose a new size");
    if (size >100) {
        size = 16;
    }
    
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

// but you need to add the event listner with an handle:
// btn.addeventListener("click", handleFunction)
/* function hoverAnElement (e) {
    e.target.classList.toggle("hover");
    e.target.removeEventListener("mouseover",hoverAnElement);
    console.log("haha");
} */