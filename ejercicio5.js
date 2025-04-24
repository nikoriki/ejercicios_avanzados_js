function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  // Ejemplos
  console.log(rollDice(6));  // Puede devolver un número entre 1 y 6
  console.log(rollDice(20)); // Puede devolver un número entre 1 y 20
  console.log(rollDice(10)); // Puede devolver un número entre 1 y 10
  