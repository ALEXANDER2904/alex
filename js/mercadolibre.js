//cuando se trabaja con objetos, se construye la clase 
class Automovil {
    constructor(marca, modelo, precio, year, kilometros, ubicacion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.year = year;
        this.kilometros = kilometros;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("XTZ ", "125", 7000000, "2017 ·", " 10.400 km ·", " Pitalito-Huila", "images/xtz.jpg");
let auto2 = new Automovil("XTZ", "250", 25000000, "2022 ·", " 7.700 km ·", " Pitalito-Huila", "images/mini-xtz250-2020-1.JPG");
let auto3 = new Automovil("RX", "115", 1000000, "2015 ·", " 36.420 km ·", " Pitalito-Huila", "images/rx.jpg");
let auto4 = new Automovil("DT", "125", 15000000, "2000 ·", " 9.300 km ·", " Pitalito-Huila", "images/dt.jpg");

/* alert (auto1.marca + " " + auto1.modelo); */

// for (contador = 1; contador <= 2; contador++) {

                
let motos = [
    CargarVehiculo(auto1),
    CargarVehiculo(auto2),
    CargarVehiculo(auto3),
    CargarVehiculo(auto4)
  ];
  
  let inputBusqueda = document.getElementById("inputBusqueda");
  
  inputBusqueda.addEventListener("input", function() {
    let inputUser = inputBusqueda.value.toLowerCase();
    let motosFiltradas = [];
    
    // Vaciar el array motos
    motosFiltradas = [];
  
    if (inputUser.includes("xtz")) {
      motosFiltradas.push(CargarVehiculo(auto1));
      motosFiltradas.push(CargarVehiculo(auto2));
    }
    if (inputUser.includes("rx")) {
      motosFiltradas.push(CargarVehiculo(auto3));
    }
    if (inputUser.includes("dt")) {
      motosFiltradas.push(CargarVehiculo(auto4));
    }
    
    motos = motosFiltradas;
  
    // Realizar cualquier acción necesaria con el nuevo array de motos
    // Por ejemplo, puedes actualizar la vista aquí
  });
  
  
  

function CargarVehiculo(auto) {

        /* inputBusqueda.addEventListener("keydown", function(event) {
            if(event.key == "Enter"){ */
            let mainContent = document.getElementById("mainContent");
        
            /* Caja del producto */
            let boxProducto = document.createElement("div");
            mainContent.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");
        
            /* Caja para la imagen */
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");
            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto")
        
            /* Caja para información */
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");
            let marca = document.createElement("label");
            boxInfo.appendChild(marca);
            let textNodeMarca = document.createTextNode(auto.marca + "" + auto.modelo);
            marca.appendChild(textNodeMarca);
            marca.setAttribute("class", "marca");
        
            /* Precio */
            let  precio= document.createElement("label");
            boxInfo.appendChild(precio);
            let precioStr = Intl.NumberFormat('de-DE').format(auto.precio);
            let textNodePrecio = document.createTextNode("$" + precioStr);
            precio.appendChild(textNodePrecio);
            precio.setAttribute("class", "precio")

        
            /* año */
            let  año = document.createElement("label");
            boxInfo.appendChild(año);
            let añoStr = auto.year;
            let textNodeAño = document.createTextNode(añoStr);
            año.appendChild(textNodeAño);
            año.setAttribute("class", "año")
        
            /* kilometros */
            let kilometros = document.createElement("label");
            boxInfo.appendChild(kilometros);
            let kilometrosStr = auto.kilometros;
            let textNodeKilometros = document.createTextNode(kilometrosStr);
            kilometros.appendChild(textNodeKilometros);
            kilometros.setAttribute("class", "kilometros")
        
            /* Ubicación */
            let ubicacion = document.createElement("label");
            boxInfo.appendChild(ubicacion);
            let ubicacionStr = auto.ubicacion;
            let textNodeUbicacion = document.createTextNode(ubicacionStr);
            ubicacion.appendChild(textNodeUbicacion);
            ubicacion.setAttribute("class", "ubicacion")
        
            /* Icono corazón */
            let boxCorazon = document.createElement("div");
            boxImg.appendChild(boxCorazon);
            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);
            boxCorazon.setAttribute("class", "box-corazon"); 
            iconoCorazon.setAttribute("class", "icono-corazon fa-regular fa-heart");
        
            /* Linea divisora */
            let lineaDiv = document.createElement("hr");
            boxProducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");
            
            /* } */  
}

// FILTROS

cargarFiltro();

function cargarFiltro() {

}