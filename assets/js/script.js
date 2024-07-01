const propiedades_venta = [
  {
    nombre: "Departamento en San Miguel",
    src: "/assets/img/1.jpg",
    descripcion: "A pasos de Metro San Miguel",
    ubicacion: "El Coligüe #2123",
    habitaciones: 2,
    costo: 2500, // Suponiendo que la moneda sea UF
    smoke: false,
    pets: false,
  },
  // Agregue 3 propiedades más con una estructura similar
];

const propiedades_alquiler = [
  {
    nombre: "Pieza Independiente en San Miguel",
    src: "/assets/img/8.png",
    descripcion: "Cómoda habitación independiente",
    ubicacion: "El Coligüe #2123",
    habitaciones: 1,
    costo: 8, // Suponiendo que la moneda sea UF
    smoke: false,
    pets: false,
  },
  // Agregue 3 propiedades más con una estructura similar
];

// Función para generar una plantilla HTML para una propiedad
function createPropertyCard(property) {
  return `
      <div class="card">
        <h2 class="card_titl">${property.nombre}</h2>
        <img class="card_img" src="${property.src}" alt="">
        <p class="card_desc">${property.descripcion}</p>
        <p class="card_ubic">Ubicación: ${property.ubicacion}</p>
        <p class="card_habitaciones">Habitaciones: ${property.habitaciones}</p>
        <p class="card_cost">Costo: ${property.costo} UF</p>
        <p class="card_smok">Fumar: <img class="icon" src="${
          property.smoke ? "/assets/img/fumar.png" : "/assets/img/nofumar.png"
        }" alt="${property.smoke ? "Se permite Fumar" : "No Fumar"}"></p>
        <p class="card_pets">Mascotas: <img class="icon" src="${
          property.pets ? "/assets/img/mascota.png" : "/assets/img/no.png"
        }" alt="${
    property.pets ? "Se permiten Mascotas" : "No se permiten Mascotas"
  }"></p>
      </div>
    `;
}

// Poblar 'venta.html' con 3 propiedades en venta
const ventaContainer = document.querySelector(".venta .grid-container");
for (let i = 0; i < 3; i++) {
  const propertyHTML = createPropertyCard(propiedades_venta[i]);
  ventaContainer.innerHTML += propertyHTML;
}

// Poblar 'renta.html' con 3 propiedades en alquiler
const rentaContainer = document.querySelector(".renta .grid-container");
for (let i = 0; i < 3; i++) {
  const propertyHTML = createPropertyCard(propiedades_alquiler[i]);
  rentaContainer.innerHTML += propertyHTML;
}

// Función para generar una plantilla HTML para una propiedad
function createPropertyCard(property) {
  return `
      <div class="card">
        <h2 class="card_titl">${property.nombre}</h2>
        <img class="card_img" src="${property.src}" alt="">
        <p class="card_desc">${property.descripcion}</p>
        <p class="card_ubic">Ubicación: ${property.ubicacion}</p>
        <p class="card_habitaciones">Habitaciones: ${property.habitaciones}</p>
        <p class="card_cost">Costo: ${property.costo} UF</p>
        <p class="card_smok">Fumar: <img class="icon" src="${
          property.smoke ? "/assets/img/fumar.png" : "/assets/img/nofumar.png"
        }" alt="${property.smoke ? "Se permite Fumar" : "No Fumar"}"></p>
        <p class="card_pets">Mascotas: <img class="icon" src="${
          property.pets ? "/assets/img/mascota.png" : "/assets/img/no.png"
        }" alt="${
    property.pets ? "Se permiten Mascotas" : "No se permiten Mascotas"
  }"></p>
      </div>
    `;
}

// Poblar 'venta.html' con 3 propiedades en venta
const ventaContainer = document.querySelector(".venta .grid-container");
for (let i = 0; i < 3; i++) {
  const propertyHTML = createPropertyCard(propiedades_venta[i]);
  ventaContainer.innerHTML += propertyHTML;
}

// Poblar 'renta.html' con 3 propiedades en alquiler
const rentaContainer = document.querySelector(".renta .grid-container");
for (let i = 0; i < 3; i++) {
  const propertyHTML = createPropertyCard(propiedades_alquiler[i]);
  rentaContainer.innerHTML += propertyHTML;
}

<section class="venta">
  <h1 class="venta_title">Propiedades en Venta</h1>
  <div class="grid-container">
  </div>
  <div class="btn_container">
    <a href="venta.html" class="btn btn_vermas">Ver todas las
