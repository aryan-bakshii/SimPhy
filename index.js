var x = document.getElementById("slidecontainer-1");
var y = document.getElementById("slidecontainer-2");
x.style.display = "none"
y.style.display = "none"

function magnify() {
    var x = document.getElementById("slidecontainer-1");
    var y = document.getElementById("slidecontainer-2");
    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
    }
    else if (x.style.display === "none" && y.style.display === "block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function speed() {
    var x = document.getElementById("slidecontainer-1");
    var y = document.getElementById("slidecontainer-2");
    if (x.style.display === "none" && y.style.display === "none") {
        y.style.display = "block";
    }
    else if (x.style.display === "block" && y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
    }
}

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu")
        .style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block") {
        hideMenu();
    } else {
        var menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}
