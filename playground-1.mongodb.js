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

// insert one
// db.newStudent.insertOne({
//   name: 'Diddy',
//   age: 20,
//   address: 'Saigon',
//   gmail: 'diddy@gmail.com',
// });

// insert many
// db.newStudent.insertMany([
//   {
//     name: 'D',
//     age: 20,
//     address: 'Saigon',
//     gmail: 'd@gmail.com',
//   },
//   {
//     name: 'E',
//     age: 20,
//     address: 'Saigon',
//     gmail: 'e@gmail.com',
//   },
//   {
//     name: 'F',
//     age: 20,
//     address: 'Saigon',
//     gmail: 'f@gmail.com',
//   },
// ]);

// xoá document
// db.newStudent.remove({
//   name: 'F',
// });

// update 1 data
// db.newStudent.updateOne(
//   {
//     _id: ObjectId('69f815430b0206a1cba717c4'),
//   },
//   {
//     $set: {
//       name: 'Dave20H',
//       age: 21,
//     },
//   },
// );

// add 1 cột mới cho tất cả sinh viên
db.newStudent.updateMany(
  {},
  {
    $set: {
      gender: 'male',
      desc: '',
    },
  },
);
