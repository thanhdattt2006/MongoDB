import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('api/transaction')
export class TransactionController {

    constructor(
        private transactionService: TransactionService
    ) { }

    @Get('history/:accId/:n')
    async getHistory(@Param('accId') accId: string, @Param('n') n: string) {
        try {
            return await this.transactionService.getHistory(accId, parseInt(n));
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('transfer')
    async transferMoney(@Body() body: any) {
        try {
            let result = await this.transactionService.transferMoney(body.fromAccId, body.toAccId, body.amount);
            if (result) {
                return {
                    msg: 'Success'
                };
            }
            else {
                throw new HttpException({
                    msg: 'Failed'
                }, HttpStatus.BAD_REQUEST);
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('search-by-date/:accId')
    async searchByDate(@Param('accId') accId: string, @Query('startDate') startDate: string, @Query('endDate') endDate: string) {
        try {
            return await this.transactionService.searchByDate(accId, startDate, endDate);
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

}
