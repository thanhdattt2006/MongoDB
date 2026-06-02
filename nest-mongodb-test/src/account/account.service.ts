import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {

    constructor(
        @InjectModel(Account.name)
        private accountModel: Model<Account>
    ) { }

    async create(account: Account) {
        account.Balance = 0; // Gán mặc định cho balance là 0
        account.Password = bcrypt.hashSync(account.Password, bcrypt.genSaltSync());
        return this.accountModel.create(account);
    }

    async login(Username: string, Password: string) {
        try {
            let account = await this.accountModel.findOne({ Username }).exec();
            if (account != null) {
                if (bcrypt.compareSync(Password, account.Password)) {
                    return account;
                }
            }
            return null;
        } catch (ex) {
            return null;
        }
    }

    async updateBalance(accountId: string, amount: number) {
        let account = await this.accountModel.findById(accountId);
        if (!account) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
        }
        account.Balance = amount;
        return account.save();
    }

    async updateInfo(accountId: string, updateData: any) {
        // Có thể cập nhật Phone, Username, Password (nếu có update pass thì nhớ hash)
        if (updateData.Password) {
            updateData.Password = bcrypt.hashSync(updateData.Password, bcrypt.genSaltSync());
        }
        return this.accountModel.findByIdAndUpdate(accountId, updateData, { new: true }).exec();
    }
    
    async findById(id: string) {
        return this.accountModel.findById(id).exec();
    }
}
