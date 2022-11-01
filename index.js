const store = {
  name: 'Bags',
  address: {
    country: 'Ukraine',
    city: 'Odesa',
    street: 'Gaidara',
    houseNumber: 65,
  },
};
store.clients = {};

function person(namePerson, numberQuantity, numberBonuses) {
  store.clients[namePerson] = {
     quantity: numberQuantity,
      bonuses: numberBonuses,
    };
}

person('Horbenko Oleksandra', 25, 35);
person("Oleksii Velanskiy", 45, 25);
person("Olena Demchyk", 14, 27);
person("Pavlo Fedorenko", 31, 61);
person("Oleksii Davudov", 25, 25);



// 2 способ создания свойств и значений в "clients"

// store.clients["Horbenko Oleksandra"] = {
//   quantity: 17,
//   bonuses: 12,
// };
// store.clients["Oleksii Yelanskiy"] = {
//   quantity: 11,
//   bonuses: 52,
// };
// store.clients["Olena Demchyk"] = {
//   quantity: 26,
//   bonuses: 95,
// };
// store.clients["Pavlo Fedorenko"] = {
//   quantity: 12,
//   bonuses: 40,
// };
// store.clients["Oleksii Davudov"] = {
//   quantity: 9,
//   bonuses: 18,
// };
