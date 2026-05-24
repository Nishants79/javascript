function isValidJsBasicsIdentifier(name) {
  name = name.trim();

  const reservedWords = ["const", "var", "class", "function", "return"];

  if (name.length === 0) {
    return false;
  }

  if (reservedWords.includes(name)) {
    return false;
  }

  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}
