// global query selectors
const selectEl = document.querySelector("label select");

const buildGrid = function() {
    selectEl.addEventListener("change", () => {                
        const wrapperEl = document.querySelector(".wrapper");
        wrapperEl.innerHTML = "";
        const numOfTiles = selectEl.value

        if(numOfTiles !== "") {
            for (let index = 0; index < numOfTiles; index++) {
                const newTile = document.createElement("div");
                newTile.classList.add("tile");
                wrapperEl.insertAdjacentElement("beforeend", newTile)
            }
        }
    })
}

const tileHighlight = function() {
    let selectedOrder = []
    // if selectEl changes, reset selectedOrder to avoid bugs
    selectEl.addEventListener("change", () => {
        selectedOrder = [];
    })

    document.addEventListener("click", (e) => {
        // error handling
        if(!e.target.classList.contains("tile")) return;
        if(selectedOrder.includes(e.target)) return;

        e.target.classList.add("selected");
        selectedOrder.push(e.target);
        // select value
        const numOfTiles = selectEl.value           

        if(selectedOrder.length >= numOfTiles) {
            const allTilesEl = document.querySelectorAll(".tile");
            // disabling selectEl and click events on squares when functionality begins 
            selectEl.setAttribute("disabled", true);
            allTilesEl.forEach(tile => tile.classList.add("no-click"));

            const interval = setInterval(() => {
                const tile = selectedOrder.shift();
                tile.classList.remove("selected");
                if(selectedOrder.length === 0) {
                    // enabling selectEl and click on squares when functionality ends
                    selectEl.removeAttribute("disabled"); 
                    allTilesEl.forEach(tile => tile.classList.remove("no-click"));
                    clearInterval(interval);
                }
            }, 500)
        } 
    });
}

const darkMode = function() {
    const rootEl = document.querySelector(":root");
    const bodyEl = document.querySelector("body");
    const darkModeIconEl = document.querySelector(".dark-mode-icon");

    darkModeIconEl.addEventListener("click", () => {
        if(!bodyEl.classList.contains("dark-mode")) {
            bodyEl.classList.add("dark-mode");
            rootEl.style.setProperty("--main-color", "#000")
            rootEl.style.setProperty("--text-color", "#fff")

        } else {
            bodyEl.classList.remove("dark-mode");
            rootEl.style.setProperty("--main-color", "#fff")
            rootEl.style.setProperty("--text-color", "#000")
        }
    })
}

const init = function() {
    buildGrid();
    tileHighlight();
    darkMode();
}

init();
