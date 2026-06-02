import { Injectable } from '@nestjs/common';
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

    create(account: Account) {
        account.Balance = 0;
        account.Password = bcrypt.hashSync(account.Password, bcrypt.genSaltSync());
        return this.accountModel.create(account);
    }

    async login(username: string, password: string) {
        try {
            let account = await this.accountModel.findOne({
                Username: username
            }).exec();
            
            if (account != null) {
                let check = bcrypt.compareSync(password, account.Password);
                if (check) {
                    return account;
                }
            }
            return null;
        }
        catch (ex) {
            return null;
        }
    }

    async updateBalance(id: string, amount: number) {
        let account = await this.accountModel.findById(id).exec();
        if (account != null) {
            account.Balance = amount;
            return account.save();
        }
        return null;
    }

    async updateInfo(id: string, updateData: any) {
        if (updateData.Password) {
            updateData.Password = bcrypt.hashSync(updateData.Password, bcrypt.genSaltSync());
        }
        return this.accountModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }
    
    findById(id: string) {
        return this.accountModel.findById(id).exec();
    }

}
