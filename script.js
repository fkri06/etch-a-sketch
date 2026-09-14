const container = document.querySelector(".container");
const button = document.querySelector("button");
let boxNumber;

function sketchGrid(n) {
    // 16 x 16 grid square div inside container
    for (let i = 0; i < n * n; i++) {
        const childContainer = document.createElement("div");
        childContainer.classList.add("child-container");
        container.appendChild(childContainer);
    }
}

function removeGrid() {
    const childContainers = document.querySelectorAll(".child-container");
    if (childContainers) {
        childContainers.forEach((item) => item.remove());
    }
}

function hover() {
    const childContainers = document.querySelectorAll(".child-container");
    childContainers.forEach(child => {
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = "red";
        });
    });
}

button.addEventListener("click", () => {
    removeGrid();
    boxNumber = Number.parseInt(prompt("Enter box number"));
    sketchGrid(boxNumber);
    hover();
});

