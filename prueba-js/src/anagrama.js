const normalizeWord = (word) => {
  return word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .sort()
    .join("");
};

export default (word1, word2) => {
  if (!word1 || !word2) return false;
  return normalizeWord(word1) === normalizeWord(word2);
};
