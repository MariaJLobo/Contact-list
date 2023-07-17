let contactos = [];

function agregarContacto(contacto) {
  contactos.push(contacto);
  console.log("Contacto añadido:", contacto);
}

function borrarContacto(id) {
  let indice = -1;
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].id === id) {
      indice = i;
      break;
    }
  }
  
  if (indice !== -1) {
    let contactoBorrado = contactos.splice(indice, 1);
    console.log(
      "Contacto borrado:",
      contactoBorrado[0].nombres,
      contactoBorrado[0].apellidos
    );
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

function imprimirContactos() {
  console.log("contactos:");
  for (let contacto of contactos) {
    console.log("ID:", contacto.id);
    console.log("Nombre completo:", contacto.nombres, contacto.apellidos);
    console.log("Teléfono:", contacto.telefono);
    console.log("Ciudad:", contacto.ciudad);
    console.log("Dirección:", contacto.direccion);
  }
}

let nuevoContacto = {
  id: 0,
  nombres: "Maria Jose",
  apellidos: "Lobo",
  telefono: "8732-2133",
  ciudad: "Villanueva",
  direccion: "Kilometro 71",
};

agregarContacto(nuevoContacto);
