function vernumero(num) {
    return new Promise((resolve, reject) => {
      if (num > 5) {
        resolve(`numero aceptado: ${num}`);
      } else {
        reject(`numero rechazado: ${num}`);
      }
    });
  }
  const numero = 7; 
  
  vernumero(numero)
    .then((mensaje) => {
      console.log(mensaje); 
    })
    .catch((error) => {
      console.error(error); 
    });
  