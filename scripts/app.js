const container = document.querySelector(".container");
function generateMasonryGrid(cols, images) {
    container.innerHTML = "";
    let columnWrappers = {};
    // creat col items array
    for (let i = 0; i < cols; i++) {
        columnWrappers[`column${i}`] = [];
    }
    // add item to column in object
    for (let i = 0; i < images.length; i++) {
        const col = i % cols;
        columnWrappers[`column${col}`].push(images[i]);
    }
    // creat element and add to div container
    for (let i = 0; i < cols; i++) {
        let colPosts = columnWrappers[`column${i}`];
        let col = document.createElement("div");
        col.classList.add("column");
        colPosts.forEach((post) => {
            let postDiv = document.createElement("div");
            postDiv.classList.add("post");
            let image = document.createElement('img');
            image.src = post.image;
            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            let title = document.createElement("h3");
            title.classList.add("titles")
            title.innerText = post.title;

            // overlay.appendChild(title);
            postDiv.append(image, overlay, title);
            col.appendChild(postDiv);
        });
        container.appendChild(col);
    }
}
let previousScreenSize = window.innerWidth;
window.addEventListener("resize", () => {
    imageIndex = 0;
    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        generateMasonryGrid(1, images);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateMasonryGrid(2, images);
    } else if(window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateMasonryGrid(4, images);
    }
    previousScreenSize = window.innerWidth;
});
// page load
if(previousScreenSize < 600) {
    generateMasonryGrid(1, images);
} else if(previousScreenSize >=600 && previousScreenSize<1000) {
    generateMasonryGrid(2, images);
}else {
    generateMasonryGrid(4, images);
}
