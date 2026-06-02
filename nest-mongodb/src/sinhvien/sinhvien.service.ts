import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SinhVien } from './snhvien.model';
import { Model } from 'mongoose';

@Injectable()
export class SinhvienService {

    constructor(
        @InjectModel(SinhVien.name)
        private sinhVienModel: Model<SinhVien>
    ) { }

    findAll() {
        return this.sinhVienModel.find().exec();
    }

    findById(id: string) {
        return this.sinhVienModel.findById(id).exec();
    }

    findByDTB(min: number, max: number) {
        return this.sinhVienModel.find({
            $and: [
                { dtb: { $gte: min } },
                { dtb: { $lte: max } }
            ]
        }).exec();
    }

    findByKeyword(keyword: string) {
        return this.sinhVienModel.find({
            hoTen: { $regex: keyword, $options: 'i' }
        }).exec();
    }

    sortByDTB(direction: any) {
        return this.sinhVienModel.find().sort({
            dtb: direction
        }).exec();
    }

    sortByDTBAndLimit(direction: any, n: number) {
        return this.sinhVienModel.find().sort({
            dtb: direction
        }).limit(n).exec();
    }

    async xepLoai(id: string) {
        let sinhVien = await this.sinhVienModel.findById(id);
        if (sinhVien!.dtb >= 8) {
            return 'A';
        }
        else if (sinhVien!.dtb >= 7) {
            return 'B';
        }
        else if (sinhVien!.dtb >= 6) {
            return 'C';
        }
        return 'D';
    }

}
