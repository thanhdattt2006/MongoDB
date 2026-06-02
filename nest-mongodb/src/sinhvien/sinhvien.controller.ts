import { Controller, Get, HttpException, HttpStatus, Param, ParseFloatPipe, ParseIntPipe } from '@nestjs/common';
import { SinhvienService } from './sinhvien.service';

@Controller('api/sinhvien')
export class SinhvienController {

    constructor(
        private sinhvienService: SinhvienService
    ) { }

    @Get('find-all')
    findAll() {
        try {
            return this.sinhvienService.findAll();
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-id/:id')
    async findById(@Param('id') id: string) {
        try {
            let sinhVien = await this.sinhvienService.findById(id);
            if (sinhVien == null) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return sinhVien;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-dtb/:min/:max')
    async findByDTB(@Param('min', ParseFloatPipe) min: number,
        @Param('max', ParseFloatPipe) max: number) {
        try {
            let sinhViens = await this.sinhvienService.findByDTB(min, max);
            if (sinhViens.length == 0) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return sinhViens;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-keyword/:keyword')
    async findByKeyword(@Param('keyword') keyword: string) {
        try {
            let sinhViens = await this.sinhvienService.findByKeyword(keyword);
            if (sinhViens.length == 0) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return sinhViens;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('sort/:direction')
    async sort(@Param('direction', ParseIntPipe) direction: number) {
        try {
            let sinhViens = await this.sinhvienService.sortByDTB(direction);
            if (sinhViens.length == 0) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return sinhViens;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('xep-loai/:id')
    async xepLoai(@Param('id') id: string) {
        try {
            return {
                loai: await this.sinhvienService.xepLoai(id)
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

}
