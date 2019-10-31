//0.02//
var herenselect = document.getElementById("herenselect");
var herenInput = document.getElementById("heren1");

var damesselect = document.getElementById("damesselect");
var damesInput = document.getElementById("dames1");

var kinderenselect = document.getElementById("kinderenselect");
var kinderenInput = document.getElementById("kinderen1");
    
herenInput.addEventListener("click", () => {
    herenselect.children[0].style.display = "block";
});

 console.log(damesselect.children[0].style.display)

damesInput.addEventListener("click", () => {
    console.log(damesselect.children)
    damesselect.children[0].style.display = "block";
    console.log(damesselect.children[0].style.display)
});

kinderenInput.addEventListener("click", () => {
    kinderenselect.children[0].style.display = "block";
});

var htreatment = document.getElementById("dbheren").selectedIndex;

var dtreatment = document.getElementById("dbdames").selectedIndex;

var ktreatment = document.getElementById("dbkinderen").selectedIndex;
console.log(htreatment);

