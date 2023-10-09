let InputBusqueda = document.getElementById("inputBusqueda");
class Automovil{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}


//ESTE ES EL ALERT
// let auto1 = new Automovil("Toyota", "TXL");
// alert(auto1.marca+" "+auto1.modelo);

window.addEventListener("load", function(event) {
// InputBusqueda.addEventListener("keydown",function(event){
    // if(event.key == "Enter"){
    let mainConten = document.getElementById("mainContent");

    // Caja para el producto
    let boxProducto = document.createElement("div");
    mainConten.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    // Caja para la imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", "images/xtz.jpg");
    imgAuto.setAttribute("class", "img-moto");

    // Caja para la info
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
});