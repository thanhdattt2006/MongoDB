import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionDetails } from './transaction.model';
import { Model } from 'mongoose';
import { AccountService } from '../account/account.service';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(TransactionDetails.name)
        private transactionModel: Model<TransactionDetails>,
        private accountService: AccountService
    ) { }

    getHistory(accId: string, n: number) {
        return this.transactionModel.find({
            AccID: accId
        }).sort({
            DateOfTrans: -1
        }).limit(n).exec();
    }

    async transferMoney(fromAccId: string, toAccId: string, amount: number) {
        try {
            let fromAccount = await this.accountService.findById(fromAccId);
            let toAccount = await this.accountService.findById(toAccId);

            if (fromAccount != null && toAccount != null) {
                if (fromAccount.Balance >= amount) {
                    fromAccount.Balance -= amount;
                    toAccount.Balance += amount;
                    
                    await fromAccount.save();
                    await toAccount.save();

                    // log gui tien
                    await this.transactionModel.create({
                        AccID: fromAccId,
                        TransMoney: amount,
                        TransType: 2,
                        DateOfTrans: new Date()
                    });

                    // log nhan tien
                    await this.transactionModel.create({
                        AccID: toAccId,
                        TransMoney: amount,
                        TransType: 1,
                        DateOfTrans: new Date()
                    });

                    return true;
                }
            }
            return false;
        }
        catch (ex) {
            return false;
        }
    }

    searchByDate(accId: string, startDate: string, endDate: string) {
        return this.transactionModel.find({
            AccID: accId,
            DateOfTrans: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        }).exec();
    }

}
