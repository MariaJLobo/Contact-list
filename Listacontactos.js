let contactos = ["Maria Lobo", "Miguel Lopez", "Bernardo Sosa", "Marisol Jimenez"];

function agregarContacto(contacto) {
  contactos.push(contacto);
  console.log("Contacto añadido:", contacto);
}

function borrarContacto(contacto) {
  let indice = listaContactos.indexOf(contacto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
    console.log("Contacto borrado:", contacto);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of listaContactos) {
    console.log(contacto);
  }
}
  
