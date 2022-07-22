document.getElementById("slidecontainer-1").style.display = "none";
document.getElementById("slidecontainer-2").style.display = "none";

// window.addEventListener('load', function () { // NOT `DOMContentLoaded`
//     var draggable = new PlainDraggable(document.getElementById('sliders'));
//     draggable.containment = { left: 0, top: 0, right: '100%', height: '100%' };
// });

function rigidbody() {
    document.getElementById("geometry").style.display = "none";
    document.getElementById("optics").style.display = "none";
    document.getElementById("circuit").style.display = "none";

    var x = document.getElementById("rigidbody");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else{
        x.style.display = "none";
    }
}

function optics() {
    document.getElementById("geometry").style.display = "none";
    document.getElementById("rigidbody").style.display = "none";
    document.getElementById("circuit").style.display = "none";

    var x = document.getElementById("optics");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else{
        x.style.display = "none";
    }
}

function geometry() {
    document.getElementById("optics").style.display = "none";
    document.getElementById("rigidbody").style.display = "none";
    document.getElementById("circuit").style.display = "none";

    var x = document.getElementById("geometry");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else{
        x.style.display = "none";
    }
}

function circuit() {
    document.getElementById("optics").style.display = "none";
    document.getElementById("rigidbody").style.display = "none";
    document.getElementById("geometry").style.display = "none";

    var x = document.getElementById("circuit");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else{
        x.style.display = "none";
    }
}

function magnify() {
    var x = document.getElementById("slidecontainer-1");
    document.getElementById("slidecontainer-2").style.display = "none";

    if (x.style.display === "none") {
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}

function speed() {
    var y = document.getElementById("slidecontainer-2");
    document.getElementById("slidecontainer-1").style.display = "none";

    if (y.style.display === "none") {
        y.style.display = "block";
    } else{
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
