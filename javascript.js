var prevX;
var prevY;
var count = 0;

var addDot = function(e) {
    
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "5");
    c.setAttribute("fill", "blue");
    c.setAttribute("id", "dot");
    s.appendChild(c);

    if (count != 0) {
	l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	l.setAttribute("x1", prevX);
	l.setAttribute("y1", prevY);
	l.setAttribute("x2", e.offsetX);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("id", "lin");
	s.appendChild(l);
    }
    
    prevX = e.offsetX;
    prevY = e.offsetY;
    count += 1;
    
};

var clear = function(e) {
    while (count != 0) {
	element = document.getElementById("dot");
	element.parentNode.removeChild(element);
	element = document.getElementById("lin");
	element.parentNode.removeChild(element);
	count -= 1;
    }
};

s.addEventListener("click", addDot);
b.addEventListener("click", clear);
