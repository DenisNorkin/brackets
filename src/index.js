module.exports = function check(str, bracketsConfig) {
  let bracketsStr = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsStr += bracketsConfig[i][0] + bracketsConfig[i][1];
  }
  let cache = [];
  for (let key of str) {
    if (bracketsStr.indexOf(key) % 2 === 0) {
      if (
        key === bracketsStr[bracketsStr.indexOf(key) + 1] &&
        cache[cache.length - 1] === bracketsStr.indexOf(key)
      ) {
        cache.pop();
      } else {
        cache.push(bracketsStr.indexOf(key));
      }
    } else {
      if (cache.pop() !== bracketsStr.indexOf(key) - 1) {
        return false;
      }
    }
  }
  return cache.length === 0;
};
