import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.model';
import { Model } from 'mongoose';

@Injectable()
export class StudentService implements OnModuleInit {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) { }

  async onModuleInit() {
    try {
      const count = await this.studentModel.countDocuments().exec();
      if (count === 0) {
        console.log('[Seeder] Student collection is empty. Seeding sample students...');
        const sampleStudents = [
          { name: 'Nguyen Van A', age: 20, score: 8.5, gender: 'male' },
          { name: 'Tran Thi B', age: 21, score: 7.2, gender: 'female' },
          { name: 'Le Hoang C', age: 22, score: 9.0, gender: 'male' },
          { name: 'Pham Minh D', age: 19, score: 6.5, gender: 'male' },
          { name: 'Vo Hoang E', age: 20, score: 8.0, gender: 'female' }
        ];
        await this.studentModel.insertMany(sampleStudents);
        console.log('[Seeder] Seeded 5 sample students successfully.');
      }
    } catch (error) {
      console.error('[Seeder] Failed to seed students:', error.message || error);
    }
  }

  async create(studentData: Partial<Student>) {
    const createdStudent = new this.studentModel(studentData);
    return createdStudent.save();
  }

  findAll() {
    return this.studentModel.find().exec();
  }

  async findById(id: string) {
    return this.studentModel.findById(id).exec();
  }

  async findByName(name: string) {
    return this.studentModel.find({ name }).exec();
  }

  async findByMinMax(minScore: number, maxScore: number) {
    return this.studentModel.find({ score: { $gte: minScore, $lte: maxScore } }).exec();
  }

  async update(id: string, studentData: Partial<Student>) {
    return this.studentModel.findByIdAndUpdate(id, studentData, { new: true }).exec();
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
