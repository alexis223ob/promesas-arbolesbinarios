function delay(m) {
    return new Promise(resolve => setTimeout(resolve, m));
  }

delay(2000)
.then(() => {
  console.log("Primera espera completada");
  return delay(2000); 
})

.then(() => {
  console.log("Segunda espera completada");
  return delay(2000); 
})

.then(() => {
  console.log("Tercera espera completada");
});