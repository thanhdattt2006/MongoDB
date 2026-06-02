import { Body, Controller, Get, Param, Post, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('api/transaction')
export class TransactionController {

    constructor(private transactionService: TransactionService) {}

    // 2) Liệt kê n lịch sử giao dịch của 1 tài khoản theo thứ tự giao dịch mới nhất lên đầu
    @Get('history/:accId/:n')
    async getHistory(@Param('accId') accId: string, @Param('n') n: string) {
        try {
            const limit = parseInt(n);
            return await this.transactionService.getHistory(accId, limit);
        } catch (ex) {
            throw new HttpException({ msg: 'Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }

    // 3) Thực hiện chuyển khoản cho tài khoản khác
    @Post('transfer')
    async transferMoney(@Body() body: { fromAccId: string, toAccId: string, amount: number }) {
        try {
            return await this.transactionService.transferMoney(body.fromAccId, body.toAccId, body.amount);
        } catch (ex) {
            throw new HttpException({ msg: 'Transfer Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }

    // 4) Tìm kiếm các loại giao dịch của 1 tài khoản theo khoảng thời gian
    @Get('search-by-date/:accId')
    async searchByDate(
        @Param('accId') accId: string,
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string
    ) {
        try {
            return await this.transactionService.searchByDate(accId, new Date(startDate), new Date(endDate));
        } catch (ex) {
            throw new HttpException({ msg: 'Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }
}
