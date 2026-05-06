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
//   $and: [
//     { name: /iP/i },
//     { $or: [{ 'brand.name': 'vn' }, { 'brand.name': 'us' }] },
//   ],
// });

// db.product.find({
//   name: /iP/i,
//   price: { $gt: 10, $lt: 20 },
// });

// db.product.find({
//   $and: [{ name: /iP/i }, { price: { $gt: 10, $lt: 20 } }],
// });

db.product.find({
  $expr: {
    $eq: [{ $year: '$createdAt' }, 2025],
  },
});
