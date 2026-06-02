import { Module } from '@nestjs/common';
import { SinhvienService } from './sinhvien.service';
import { SinhvienController } from './sinhvien.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SinhVien, SinhVienSchema } from './snhvien.model';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: SinhVien.name,
          schema: SinhVienSchema
        }
      ])
    ],
  providers: [SinhvienService],
  controllers: [SinhvienController]
})
export class SinhvienModule {}
