console.log("sakshi welcome");

function toggle(e) {
    let hiden = document.getElementById("hiden");
    let elem = document.getElementById("hide-box"),
        style = window.getComputedStyle(elem),
        right = style.getPropertyValue("right");
    if (right == "-500px") {
        elem.style.right = "0px";
        elem.style.opacity = "1";

    } else {
        hiden.style.display = "-500px";
    }
}

function closed() {
    let elems = document.getElementById("close");
    let elem = document.getElementById("hide-box"),
        style = window.getComputedStyle(elem),
        right = style.getPropertyValue("right");
    console.log("clicked");
    if (right == "0px") {
        elem.style.right = "-500px";
        elem.style.opacity = "0";
    }

}

// let background = document.getElementById("dark"),
// bg = window.getComputedStyle(background),
// style = getComputedStyle("background");
// background.style.backgroundColor = "black";
// background.style.opacity = "0.6";