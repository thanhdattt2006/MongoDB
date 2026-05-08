use('mongodb_c2409');

//Dem so spham co trong collection product
db.product.countDocuments();

db.product.find({ status: true }).count();

// 1. Liet ke 3 hoa don co tong tien lon nhat do khach hang Nguyen Van A mua trong nam 2025
// 2. Liet ke 2 hoa don duoc lap gan nhat theo payment la paypal
// 3. Liet ke 3 hoa don co tong tien lon nhat theo 2 payment la cash hoac paypal
// duoc lap trong nam 2025
// 4. Dem so hoa don duoc lap trong nam 2025
// 5. Dem so hoa don duoc lap cho khach hang Nguyen Van A mua trong nam 2025 và có tổng tiền nằm trong khoảng từ 500 đến 100
// 6. Dem co bao nhieu hoa don duoc lap theo hinh thuc thanh toan la cash hoac paypal
//1.
db.invoiced
  .find({
    $and: [
      { 'customer.name': 'Customer 1' },
      { $expr: { $eq: [{ $year: '$createAt' }, 2026] } },
    ],
  })
  .sort({ total: -1 })
  .limit(3);
//-------

db.product.aggregate([
  {
    $match: { status: true },
  },
  {
    $sort: { price: -1 },
  },
  { $skip: 1 },
  { $limit: 2 },
  { $project: { name: 1, price: 1, status: 1 } },
]);

//Dem so hoa don do khach hang Nguyen Van A mua trong nam hien tai
db.invoiced.aggregate([
  {
    $match: {
      $and: [
        { 'customer.name': 'Customer 1' },
        { $expr: { $eq: [{ $year: '$createAt' }, { $year: '$$NOW' }] } },
      ],
    },
  },
  { $count: 'DemSanPham' },
]);

//giong group by
db.product.aggregate([
  {
    $group: {
      _id: '$status',
    },
  },
]);

db.product.aggregate([
  {
    $group: {
      _id: '$brand.name',
    },
  },
]);

//Tinh tong so luong tat ca spham
//select sum(quantity) as tongSoLuong from Product
db.product.aggregate([
  {
    $group: {
      _id: '', //hoac ghi la _id='null co nghia la tat ca tat ca spham
      tongSoLuong: { $sum: '$quantity' },
    },
  },
  {
    $project: { _id: 0 },
  },
]);

db.product.aggregate([
  { $match: { status: true } },
  {
    $group: {
      _id: '', //hoac ghi la _id='null co nghia la tat ca tat ca spham
      tongSoLuong: { $sum: '$quantity' },
    },
  },
  {
    $project: { _id: 0 },
  },
]);

//select sum(price*quantity) as tongTien from product
//$multiply phep nhan
db.product.aggregate([
  {
    $group: {
      _id: '', //hoac ghi la _id='null co nghia la tat ca tat ca spham
      tongTien: { $sum: { $multiply: ['$price', '$quantity'] } },
    },
  },
  {
    $project: { _id: 0 },
  },
]);

db.product.aggregate([
  {
    $group: {
      _id: '', //hoac ghi la _id='null co nghia la tat ca tat ca spham
      max: { $max: '$price' },
    },
  },
  {
    $project: { _id: 0 },
  },
]);

db.product.aggregate([
  {
    $group: {
      _id: '', //hoac ghi la _id='null co nghia la tat ca tat ca spham
      min: { $min: '$price' },
    },
  },
  {
    $project: { _id: 0 },
  },
]);

db.product.aggregate([
  {
    $group: {
      _id: 'brand.name',
      tongSoLuong: { $sum: '$quantity' },
      demSanPham: { $sum: 1 }, //giong nhu dung ++ de dem so luong
      giaLonNhat: { $max: '$price' },
      giaNhoNhat: { $min: '$price' },
      giaTrungBinh: { $avg: '$price' },
    },
  },
  {
    //buoc 2 nay giong Having sau group by
    $match: {
      tongSoLuong: { $gte: 10 },
    },
  },
  {
    $sort: {
      tongSoLuong: -1,
    },
  },
  {
    $limit: 1,
  },
  {
    $project: {
      _id: 1,
      tongSoLuong: 1,
    },
  },
]);
