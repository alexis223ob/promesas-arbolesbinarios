function multiplyByThree(numero) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numero * 3); 
      }, 2000);
    });
  }
  
  function addFive(numero) {
    return new Promise((resolve) => {
      resolve(numero + 5); 
    });
  }
  
  const num = 7;
  
  multiplyByThree(num)
    .then((resultado) => {
      console.log(`La multiplicacion por 3 da : ${resultado}`);
      return addFive(resultado); 

    })

    .then((resulfinal) => {
      console.log(`resultado después de sumar 5: ${resulfinal}`);
    })
  
  