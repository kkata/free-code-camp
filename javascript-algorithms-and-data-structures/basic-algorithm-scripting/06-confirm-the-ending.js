function confirmEnding(str, target) {
  return str.lastIndexOf(target) + target.length === str.length;
}

confirmEnding("Bastian", "n");