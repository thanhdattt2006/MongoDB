import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.model';
import * as bcrytp from 'bcrypt';

@Controller('api/account')
export class AccountController {

    constructor(
        private accountService: AccountService
    ) { }

    @Get('find-all')
    findAll() {
        try {
            return this.accountService.findAll();
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-username/:username')
    async findByUsername(@Param('username') username: string) {
        try {
            let account = await this.accountService.findByUsername(username);
            if (account == null) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return account;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('register')
    async register(@Body() account: Account) {
        try {
            account.password = bcrytp.hashSync(account.password, bcrytp.genSaltSync());
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
            if (await this.accountService.login(account.username, account.password)) {
                return {
                    msg: 'Valid'
                };
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

}
