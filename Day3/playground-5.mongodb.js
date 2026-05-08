use('mongodb_c2409');

// tăng dần
// db.product.find().sort({
//   price: 1,
// });

// giảm dần kèm status true
// db.product
//   .find({
//     status: true,
//   })
//   .sort({
//     price: -1,
//   });

// chỉ lấy 2 sản phẩm theo giá giảm dần, đặc biệt bỏ sản phẩm đầu tiên
// db.find()
//   .sort({
//     price: -1,
//   })
//   .skip(1)
//   .limit(2);

// select * from product
// select id, name, price from product
// 1 hiển thị 0 ẩn
// db.product.find(
//   {},
//   {
//     name: 1,
//     price: 1,
//     _id: 0,
//   },
// );

db.product.find(
  {
    status: true,
  },
  {
    name: 1,
    price: 1,
    status: 1,
    _id: 0,
  },
);
