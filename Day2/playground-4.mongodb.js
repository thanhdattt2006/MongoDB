use('mongodb_c2409');

// tìm p có keyword chứa từ lap
// db.product.find({
//   name: /^lap/i,
// });

// tìm p có keyword chứa từ top
// db.product.find({
//   name: /tOp$/i,
// });

// tìm p có keyword chứa từ ap
// db.product.find({
//   name: /ap/i,
// });

// tìm p có keyword iP, brand là vn hoặc us
// db.product.find({
//   $and: [
//     { name: /iP/i },
//     { $or: [{ 'brand.name': 'vn' }, { 'brand.name': 'us' }] },
//   ],
// });

// tìm p có chứa keyword iP với giá từ 10 -> 20
// db.product.find({
//   name: /iP/i,
//   price: { $gt: 10, $lt: 20 },
// });

// db.product.find({
//   $and: [{ name: /iP/i }, { price: { $gt: 10, $lt: 20 } }],
// });

// tìm p sản xuất trong năm 2025
// db.product.find({
//   $expr: {
//     $eq: [{ $year: '$createdAt' }, 2025],
//   },
// });

// tìm p sản xuất trong tháng 10
// db.product.find({
//   $expr: {
//     $eq: [{ $month: '$createdAt' }, 10],
//   },
// });

// tìm p sản xuất trong 09/2025
// db.product.find({
//   $expr: {
//     $eq: [{ $year: '$createdAt' }, 2025],
//     $eq: [{ $month: '$createdAt' }, 9],
//   },
// });

// tìm p trong khoảng 2024->2026
// db.product.find({
//   $expr: {
//     $and: [
//       { $gte: [{ $year: '$createdAt' }, 2024] },
//       { $lte: [{ $year: '$createdAt' }, 2026] },
//     ],
//   },
// });

// tìm p trong năm 2025 với những tháng 5,7,9
// db.product.find({
//   $expr: {
//     $and: [
//       { $eq: [{ $year: '$createdAt' }, 2025] },
//       { $in: [{ $month: '$createdAt' }, [5, 7, 9]] }, // Gom lại cho clean
//     ],
//   },
// });

// tìm p trong ngày 20
// db.product.find({
//   $expr: {
//     $eq: [{ $dayOfMonth: '$createdAt' }, 20],
//   },
// });

// tìm p đúng ngày tháng năm
// db.product.find({
//   createdAt: new Date('2025-10-20'),
// });

// db.product.find({
//   $and: [
//     { createdAt: { $gte: new Date('2025-07-20') } },
//     { createdAt: { $lte: new Date('2025-10-20') } },
//   ],
// });

db.product.find({
  $expr: {
    $eq: [{ $year: '$createdAt' }, { $year: '$$NOW' }],
  },
});

db.product.find({
  $and: [
    {
      $expr: {
        $eq: [{ $month: '$createdAt' }, { $month: '$$NOW' }],
      },
    },
    {
      $expr: {
        $eq: [{ $year: '$createdAt' }, { $year: '$$NOW' }],
      },
    },
  ],
});
