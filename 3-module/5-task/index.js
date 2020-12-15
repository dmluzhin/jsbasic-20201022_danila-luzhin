/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = [];
  str.split(' ').join(',').split(',')
    .map(number => {
      if (+number) result.push(+number);
    });

  result.sort(function (a, b) {
    return a - b;
  });
  return {
    min: result[0],
    max: result[result.length - 1],
  };
}
