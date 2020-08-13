// Создаёт новый объект и записывает в него 2 свойства
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// Форматирует строку: заглавная буква + все остальные строчные
export const formatInitCap = (string = ``) => {
  return string.length > 0 ? `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}` : ``;
};

export const formatRating = (rating = 0) => Math.round((100 * rating / 5) / 10) * 10;
