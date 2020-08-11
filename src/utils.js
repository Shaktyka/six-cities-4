// Форматирует строку: заглавная буква + все остальные строчные
export const formatInitCap = (string = ``) => {
  return string.length > 0 ? `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}` : ``;
};

export const formatRating = (rating = 0) => 100 * rating / 5;
