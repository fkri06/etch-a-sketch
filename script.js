const container = document.querySelector(".container");

// 16 x 16 grid square div inside container
for (let i = 0; i < 16 * 16; i++) {
    const childContainer = document.createElement("div");
    childContainer.classList.add("child-container");
    container.appendChild(childContainer);
}

