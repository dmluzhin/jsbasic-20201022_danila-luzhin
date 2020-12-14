/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users.filter(userAge => userAge.age <= age)
    .map(userName => userName.name + ', ' + userName.balance).join('\n');
}
