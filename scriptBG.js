var h3 = document.querySelector("h3");
var colour1 = document.querySelector(".color1");
var colour2 = document.querySelector(".color2");
var body =document.getElementById("gradient");
function setGradient(){
	body.style.background = "linear-gradient(to right, "+colour1.value+"," +colour2.value+")";
	css.textContent = body.style.background + ";";
}

colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);//there is no brackets after function because 
//we want the gradient  function to be called not immediately when the event listener is added
// but only when the input is set -- and each time.
// h3.innerHTML = body.style.background.value + ";";