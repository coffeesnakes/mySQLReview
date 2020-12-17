const db = require('./index');

const seed = [
 {
   name: 'chicken',
   price: 4,
   rating: 7
 },
 {
   name: 'cheese',
   price: 1,
   rating: 3
 },
 {
   name: 'milk',
   price: 2,
   rating: 5
 },
 {
   name: 'banh mi',
   price: 13,
   rating: 10
 },
 {
   name: 'spicy pork belly',
   price: 21,
   rating: 9
 },

]

function seedMe() {
  seed.forEach((food, index) => {
    db.query(
      `INSERT INTO FOOD (name, price, rating) VALUES ("${food.name}", ${food.price}, ${food.rating});`,
      (err, results) => {
        if (err) {
          console.log(`seed failed`);
        } else {
          console.log(`seed succeeded`);
        }
      }
    );
  });
  db.end();
}

seedMe();
// food (
//   id int auto_increment not null primary key,
//   name VARCHAR(255) not null,
//   price int not null,
//   rating int not null
// );