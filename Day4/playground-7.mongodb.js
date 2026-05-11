use('mongodb_c2409');

// db.createCollection('category');

/*
db.category.insertMany([
    {
        name: 'Category 1'
    },
    {
        name: 'Category 2'
    },
    {
        name: 'Category 3'
    }
]);
*/

/*
db.product.updateMany(
    {},
    {
        $set: {
            categoryId: ObjectId('6a014f069be0cbfa564c40cb')
        }
    }
);
*/

db.product.aggregate([
  {
    $lookup: {
      from: 'category',
      localField: 'categoryId',
      foreignField: '_id',
      as: 'danhMuc',
    },
  },
  {
    $unwind: {
      path: '$danhMuc',
    },
  },
]);

db.category.aggregate([
  {
    $lookup: {
      from: 'product',
      localField: '_id',
      foreignField: 'categoryId',
      as: 'products',
    },
  },
]);

db.product.aggregate([
  {
    $lookup: {
      from: 'category',
      localField: 'categoryId',
      foreignField: '_id',
      as: 'danhMuc',
    },
  },
  {
    $unwind: {
      path: '$danhMuc',
    },
  },
  {
    $match: {
      'danhMuc.name': 'Category 1',
    },
  },
]);

// db.createCollection('invoice_details');

/*
db.invoice_details.insertMany([
    {
        invoiceId: ObjectId('69fd5c626b65730dfba19a9c'),
        productId: ObjectId('69f81d90bd44819e29a98f66'),
        price: 4.5,
        quantity: 20
    },
    {
        invoiceId: ObjectId('69fd5c626b65730dfba19a9c'),
        productId: ObjectId('69f8208ae9cdfb9b15bd25bb'),
        price: 7.8,
        quantity: 14
    },
    {
        invoiceId: ObjectId('6a01559a31c1707f270f32ca'),
        productId: ObjectId('69f81d90bd44819e29a98f66'),
        price: 4.5,
        quantity: 15
    },
    {
        invoiceId: ObjectId('6a01559a31c1707f270f32ca'),
        productId: ObjectId('69f8208ae9cdfb9b15bd25bb'),
        price: 5.6,
        quantity: 22
    },
    {
        invoiceId: ObjectId('6a01559a31c1707f270f32ca'),
        productId: ObjectId('69f8208ae9cdfb9b15bd25bc'),
        price: 22.1,
        quantity: 67
    }
]);
*/

db.invoice_details.aggregate([
  {
    $lookup: {
      from: 'product',
      localField: 'productId',
      foreignField: '_id',
      as: 'product',
    },
  },
  {
    $unwind: {
      path: '$product',
    },
  },
  {
    $lookup: {
      from: 'invoice',
      localField: 'invoiceId',
      foreignField: '_id',
      as: 'invoice',
    },
  },
  {
    $unwind: {
      path: '$invoice',
    },
  },
  {
    $match: {
      'invoice.payment': 'cash',
    },
  },
  {
    $sort: {
      price: -1,
    },
  },
]);

/* 
1. Liệt kê thông tin cac chi tiet hoa don cua san pham co ten la Laptop
2. Tinh tong tien cua hoa don co ten invoice 1
3. Tinh tong tien va dem so san pham trong tung hoa don
4. Liet ke cac hoa don co tong tien lon hon 500
5. Tinh tong tien cac hoa don duoc lap trong nam 2025
*/
