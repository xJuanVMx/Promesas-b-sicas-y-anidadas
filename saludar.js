function saludar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre === "Juan") {
        resolve(`Hola ${nombre}, bienvenido`);
      } else {
        reject("No te conozco");
      }
    }, 2000);
  });
}

saludar("Juan")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
