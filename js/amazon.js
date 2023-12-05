let calificacion1 = document.getElementById("calificacion1");
let calificacion2 = document.getElementById("calificacion2");
let calificacion3 = document.getElementById("calificacion3");
let calificacion4 = document.getElementById("calificacion4");
let calificacion5 = document.getElementById("calificacion5");
let btnGraficar = document.getElementById("btnGraficar");

btnGraficar.addEventListener("click", function() {
    let sumaCalificacion = (Number(calificacion1.value) + Number(calificacion2.value) +
                            Number(calificacion3.value) + Number(calificacion4.value) +
                            Number(calificacion5.value));
    
    let suma1 = (Number(calificacion1.value) * 100) / sumaCalificacion;
    let suma2 = (Number(calificacion2.value) * 100) / sumaCalificacion;
    let suma3 = (Number(calificacion3.value) * 100) / sumaCalificacion;
    let suma4 = (Number(calificacion4.value) * 100) / sumaCalificacion;
    let suma5 = (Number(calificacion5.value) * 100) / sumaCalificacion;

    alert(suma1);
    alert(suma2);
    alert(suma3);
    alert(suma4);
    alert(suma5);

});