// tạo db
use('mongodb_c2409');

// tạo collection
db.createCollection('category');
db.createCollection('student');

// xoá collection
db.category.drop();

// đổi tên collection
db.student.renameCollection('student_new');
