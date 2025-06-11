export default function sortCharacters(characters) {
  return characters.toSorted((a, b) => b.health - a.health);
}
