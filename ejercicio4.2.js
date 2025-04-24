function findArrayIndex(array, text) {
    return array.indexOf(text);
  }
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    
    if (index !== -1) {
      array.splice(index, 1);
    }
    
    return array;
  }
  
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  // Ejemplos
  console.log(removeItem(mainCharacters, "Leia"));       // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
  console.log(removeItem(mainCharacters, "Rey"));        // ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]
  console.log(removeItem(mainCharacters, "Yoda"));       // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"] (no cambia porque Yoda no está)
  console.log(removeItem(mainCharacters, "Han Solo"));   // ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
  console.log(removeItem(mainCharacters, "Obi-Wan"));    // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin"]
  