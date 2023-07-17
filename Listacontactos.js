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

function actualizarContacto(id, nuevosDatos) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].id === id) {
      contactos[i].nombres =
        nuevosDatos.nombres || contactos[i].nombres;
      contactos[i].apellidos =
        nuevosDatos.apellidos || contactos[i].apellidos;
      contactos[i].telefono =
        nuevosDatos.telefono || contactos[i].telefono;
      contactos[i].ciudad = nuevosDatos.ciudad || contactos[i].ciudad;
      contactos[i].direccion =
        nuevosDatos.direccion || contactos[i].direccion;
      console.log("Contacto actualizado:", contactos[i]);
      return;
    }
  }
  console.log("El contacto no existe en la lista.");
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

imprimirContactos();

let datosActualizados = {
  telefono: "8866-5432",
  direccion: "Villas del Rio",
};

actualizarContacto(0, datosActualizados);

borrarContacto(0);

