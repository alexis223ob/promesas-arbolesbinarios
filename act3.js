function delay(m) {
    return new Promise(resolve => setTimeout(resolve, m));
  }
  delay(6000)
  .then(() => {
    console.log("¡Espera completada!");
  });
