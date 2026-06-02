import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Controller('api/account')
export class AccountController {

    constructor(
        private accountService: AccountService
    ) { }

    // 1) Tạo tài khoản mới
    @Post('register')
    async register(@Body() account: Account) {
        try {
            await this.accountService.create(account);
            return { msg: 'Register Success' };
        } catch (ex) {
            throw new HttpException({ msg: 'Register Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }

    // 1) Đăng nhập tài khoản
    @Post('login')
    async login(@Body() body: any) {
        try {
            const result = await this.accountService.login(body.Username, body.Password);
            if (result) {
                return { msg: 'Login Success', data: result };
            } else {
                throw new HttpException({ msg: 'Invalid Username or Password' }, HttpStatus.BAD_REQUEST);
            }
        } catch (ex) {
            throw new HttpException({ msg: 'Login Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }

    // 3) Cập nhật cho 1 tài khoản có số tiền 5000
    @Put('set-balance/:id')
    async setBalance(@Param('id') id: string, @Body() body: any) {
        try {
            // body.amount = 5000
            const result = await this.accountService.updateBalance(id, body.amount);
            return { msg: 'Balance Updated', data: result };
        } catch (ex) {
            throw new HttpException({ msg: 'Update Balance Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }

    // 5) Cho phép cập nhật thông tin của 1 tài khoản
    @Put('update/:id')
    async updateInfo(@Param('id') id: string, @Body() body: any) {
        try {
            const result = await this.accountService.updateInfo(id, body);
            return { msg: 'Update Info Success', data: result };
        } catch (ex) {
            throw new HttpException({ msg: 'Update Info Failed', error: ex.message }, HttpStatus.BAD_REQUEST);
        }
    }
}
