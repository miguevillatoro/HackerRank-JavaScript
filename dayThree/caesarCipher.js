function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedString = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let isUpperCase = false;

    // Comprueba si el carácter es una letra y si está en mayúsculas
    if (/[a-zA-Z]/.test(char)) {
      isUpperCase = char === char.toUpperCase();
      char = char.toLowerCase();
      
      // Calcula la nueva posición tras la rotación
      const currentPosition = alphabet.indexOf(char);
      const newPosition = (currentPosition + k) % 26;

      // Asigna la nueva posición a la letra rotada
      let encryptedChar = alphabet[newPosition];

      // Vuelve a convertir la letra a mayúscula si antes estaba en mayúscula
      if (isUpperCase) {
        encryptedChar = encryptedChar.toUpperCase();
      }

      encryptedString += encryptedChar;
    } else {
      // Si el carácter no es una letra, manténgalo sin cifrar
      encryptedString += char;
    }
  }

  return encryptedString;
}