// tạo db
use('mongodb_c2409');

// tạo collection
// db.createCollection('category');
// db.createCollection('student');

// xoá collection
// db.category.drop();

// đổi tên collection
// db.new_student.renameCollection('newStudent');

// insert data
// db.newStudent.insertOne({
//   name: 'Dave',
//   age: 20,
//   address: 'Saigon',
// });

// db.newStudent.insertOne({
//   name: 'Diddy',
//   age: 20,
//   address: 'Saigon',
//   gmail: 'diddy@gmail.com',
// });

db.newStudent.insertMany([
  {
    name: 'D',
    age: 20,
    address: 'Saigon',
    gmail: 'd@gmail.com',
  },
  {
    name: 'E',
    age: 20,
    address: 'Saigon',
    gmail: 'e@gmail.com',
  },
  {
    name: 'F',
    age: 20,
    address: 'Saigon',
    gmail: 'f@gmail.com',
  },
]);
