use('mongodb_c2409');

db.product.find({
  name: /^lap/i,
});
