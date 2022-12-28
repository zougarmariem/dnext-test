/**
 * Convert keys and texts to array of objects
 * @param {Array} keys
 * @param {String} values
 * @returns {Array} return an array of objects
 */
const convertToArray = (keys, values) => {
  let result = values.map((text) => {
    const item = {};
    const rows = text.split(",").map((row) => row.replace("\n", ""));
    keys.forEach((key, index) => {
      item[key] = rows[index];
    });
    return item;
  });
  return result;
};

/**
 * Fetch data from local excel file
 * @param {String} filename filename string
 * @returns {Array} return the file's contents
 */
export const fetchExcelFile = async (filename) => {
  const content = await fetch(`./${filename}`);
  // Clean content
  const textContent = await content.text();
  const cleanContent = textContent.split("\r");
  // Remove unused last element of array
  cleanContent.pop();
  // Extract keys
  let keys = cleanContent.shift().split(",");
  return convertToArray(keys, cleanContent);
};
