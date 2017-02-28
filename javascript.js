var addDot = function(e) {
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "5");
    c.setAttribute("fill", "blue");
    s.appendChild(c);
};

var clear = function(e) {
    s.selectAll("*").remove();
};

s.addEventListener("click", addDot);
b.addEventListener("click", clear);
