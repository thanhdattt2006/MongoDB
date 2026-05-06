use('mongodb_c2409');

// db.product.find({
//   name: /^lap/i,
// });

// db.product.find({
//   name: /tOp$/i,
// });

// db.product.find({
//   name: /ap/i,
// });

// db.product.find({
//   name: /Od/i,
//   'brand.name': 'vn',
// });

db.product.find({
  name: /iP/i,
  price: { $gt: 10, $lt: 20 },
});
