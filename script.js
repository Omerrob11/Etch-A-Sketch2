// globals
let gridSize = 16*16;

// Dom references
const gridContainer = document.querySelector(".grid");
console.log(gridContainer);

// Dom element creation
for (let i = 1; i <= gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.toggle("grid_item");
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("mouseover", hoverAnElement);
}

function hoverAnElement (e) {
    e.target.classList.toggle("hover");
    e.target.removeEventListener("mouseover",hoverAnElement);
    console.log("haha");
}

