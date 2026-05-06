use('mongodb_c2409');

// db.createCollection('invoice')

// db.invoice.insertMany([
//   // Invoice 1: total = 100
//   {
//     name: 'Invoice 1',
//     createAt: ISODate('2026-10-20'),
//     total: 100,
//     payment: 'cash',
//     customer: {
//       name: 'Customer 1',
//       gender: 'male',
//       address: 'Address 1',
//     },
//   },
//   // Invoice 4: total = 750 (được thêm vào để khớp với điều kiện $gt 500 và $lt 1000)
//   {
//     name: 'Invoice 4',
//     createAt: ISODate('2026-11-01'),
//     total: 750,
//     payment: 'cash',
//     customer: {
//       name: 'Customer 1',
//       gender: 'male',
//       address: 'Address 4',
//     },
//   },
//   {
//     name: 'Invoice 2',
//     createAt: ISODate('2026-01-10'),
//     total: 300,
//     payment: 'credit',
//     customer: {
//       name: 'Customer 2',
//       gender: 'female',
//       address: 'Address 2',
//     },
//   },
//   {
//     name: 'Invoice 3',
//     createAt: ISODate('2026-05-16'),
//     total: 50,
//     payment: 'visa',
//     customer: {
//       name: 'Customer 3',
//       gender: 'female',
//       address: 'Address 3',
//     },
//   },
// ]);

// Truy vấn 1: Tìm hóa đơn có tên khách hàng bắt đầu bằng "Customer 1" VÀ tổng tiền từ 500 đến 1000
db.invoice.find({
  'customer.name': /^Customer 1/,
  total: { $gt: 500, $lt: 1000 }, // Sửa lỗi: dùng dấu phẩy để kết hợp $gt và $lt
});

// Truy vấn 2: Tìm hóa đơn có phương thức thanh toán là 'cash' HOẶC 'credit' VÀ tổng tiền từ 500 đến 1000
db.invoice.find({
  payment: { $in: ['cash', 'credit'] }, // Sửa lỗi: dùng $in để tìm nhiều giá trị cho một trường
  total: { $gt: 500, $lt: 1000 },
});

// Truy vấn 3: Tìm hóa đơn của khách hàng nữ, có phương thức thanh toán là 'cash' HOẶC 'credit' VÀ tổng tiền từ 500 đến 1000
db.invoice.find({
  'customer.gender': 'female',
  payment: { $in: ['cash', 'credit'] }, // Sửa lỗi: dùng $in để tìm nhiều giá trị cho một trường
  total: { $gt: 500, $lt: 1000 },
});
