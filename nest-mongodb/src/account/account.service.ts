import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';
import { Model } from 'mongoose';
import * as bcrytp from 'bcrypt';

@Injectable()
export class AccountService {

    constructor(
        @InjectModel(Account.name)
        private accountModel: Model<Account>
    ) { }

    findAll() {
        return this.accountModel.find().exec();
    }

    findByUsername(username: string) {
        return this.accountModel.findOne({
            username: username
        }).exec();
    }

    create(account: Account) {
        return this.accountModel.create(account);
    }

    async login(username: string, password: string) {
        try {
            let account = await this.findByUsername(username);
            if (account != null && account.status) {
                return bcrytp.compareSync(password, account.password);
            }
            return false;
        }
        catch (ex) {
            return false;
        }
    }

}
