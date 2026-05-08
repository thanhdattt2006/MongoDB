use('mongodb_c2409');

// đếm sản phẩm trong collection Product
// db.product.countDocuments();

// đếm sản phẩm có status true
// db.product.find({ status: true }).count;

// 1. Liet ke 3 hoa don co tong tien lon nhat do khach hang Nguyen Van A mua trong nam 2025
// db.invoice
//   .find(
//     {
//       'customer.name': 'Customer 1',
//     },
//     {
//       total: 1,
//     },
//   )
//   .limit(3);

// 2. Liet ke 2 hoa don duoc lap gan nhat theo payment la paypal
// db.invoice.find({ payment: 'paypal' }, { createAt: 1 }).limit(2);

// 3. Liet ke 3 hoa don co tong tien lon nhat theo 2 payment la cash hoac paypal duoc lap trong nam 2025
// db.invoice.find({}, {});
// 4. Dem so hoa don duoc lap trong nam 2025
// 5. Dem so hoa don duoc lap cho khach hang Nguyen Van A mua trong nam 2025 và có tổng tiền nằm trong khoảng từ 500 đến 100
// 6. Dem co bao nhieu hoa don duoc lap theo hinh thuc thanh toan la cash hoac paypal

db.product.aggregate([
  {
    $match: {
      status: true,
    },
  },
]);
