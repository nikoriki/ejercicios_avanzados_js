function swap(array, index1, index2) {
    const temp = array[index1];
    
    array[index1] = array[index2];
    array[index2] = temp;
    
    return array;
  }
  
  // Ejemplo
  const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  console.log(swap(fantasticFour, 0, 2));  // Intercambia los elementos en los índices 0 y 2
  