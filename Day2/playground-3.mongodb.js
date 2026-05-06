use('mongodb_c2409');

// db.createCollection('invoice')

// db.invoice.insertMany([
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

db.invoice.find({
  'customer.name': /^Customer 1/,
  total: { $gt: 500, $lt: 1000 },
});

db.invoice.find({
  payment: ['cash', 'credit'],
  total: { $gt: 500, $lt: 1000 },
});

db.invoice.find({
  'customer.gender': 'female',
  payment: 'cash' || 'credit',
  total: { $gt: 500, $lt: 1000 },
});
