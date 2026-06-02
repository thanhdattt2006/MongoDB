import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Controller('api/account')
export class AccountController {

    constructor(
        private accountService: AccountService
    ) { }

    @Post('register')
    async register(@Body() account: Account) {
        try {
            await this.accountService.create(account);
            return {
                msg: 'Success'
            };
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('login')
    async login(@Body() account: Account) {
        try {
            let result = await this.accountService.login(account.Username, account.Password);
            if (result != null) {
                return result;
            }
            else {
                throw new HttpException({
                    msg: 'Invalid'
                }, HttpStatus.BAD_REQUEST);
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('set-balance/:id')
    async setBalance(@Param('id') id: string, @Body() body: any) {
        try {
            await this.accountService.updateBalance(id, body.amount);
            return {
                msg: 'Success'
            };
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('update/:id')
    async updateInfo(@Param('id') id: string, @Body() body: any) {
        try {
            await this.accountService.updateInfo(id, body);
            return {
                msg: 'Success'
            };
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

}
