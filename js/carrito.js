let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let numSumar = document.getElementById("numSumar");

numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt) {
        auxInt--;
        document.getElementById("numView").innerText = auxInt.toString();
    }
})
numView.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    alert (aux);
})
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt < 10) {
        auxInt++;
        document.getElementById("numView").innerText = auxInt.toString();
    }
})