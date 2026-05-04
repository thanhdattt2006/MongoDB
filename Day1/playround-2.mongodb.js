use('mongodb_c2409');

// db.createCollection('product');

// db.product.insertOne({
//   name: 'Laptop',
//   price: 15.5,
//   quantity: 4,
//   status: true,
//   createdAt: ISODate('2025-10-20'),
//   colors: ['black', 'blue', 'white'],
//   brand: {
//     name: 'vn',
//     country: 'vietnam',
//   },
// });

// db.product.insertMany([
//   {
//     name: 'Airpod',
//     price: 15.5,
//     quantity: 4,
//     status: true,
//     createdAt: ISODate('2025-10-20'),
//     colors: ['black', 'blue', 'white'],
//     brand: [
//       {
//         name: 'vn',
//         country: 'vietnam',
//       },
//       {
//         name: 'us',
//         country: 'usa',
//       },
//     ],
//   },
//   {
//     name: 'Iphone',
//     price: 15.5,
//     quantity: 4,
//     status: true,
//     createdAt: ISODate('2025-10-20'),
//     colors: ['black', 'blue', 'white'],
//     brand: {
//       name: 'vn',
//       country: 'vietnam',
//     },
//   },
//   {
//     name: 'Ipad',
//     price: 15.5,
//     quantity: 4,
//     status: true,
//     createdAt: ISODate('2025-10-20'),
//     colors: ['black', 'blue', 'white'],
//     brand: {
//       name: 'vn',
//       country: 'vietnam',
//     },
//   },
// ]);

// read toàn bộ data == SELECT * FROM PRODUCT
//  db.product.find();

// lấy data có điều kiện
// db.product.find({
//   status: true,
// });

/* so sánh lớn hơn (gt = great than, gte = great than or equal, lt = less than, 
lte = less then or equal) */
// db.product.find({
//   price: {
//     $gt: 3,
//   },
// });

// db.product.find({
//   price: {
//     $gte: 1.5,
//   },
// });

// db.product.find({
//   price: {
//     $lt: 4,
//   },
// });

// db.product.find({
//   price: {
//     $lte: 3.5,
//   },
// });

// so sánh khác (ne = not equal)
db.product.find({
  price: {
    $ne: 3.5,
  },
});
