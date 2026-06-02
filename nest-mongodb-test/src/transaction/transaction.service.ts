import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

    // 2) Liệt kê n lịch sử giao dịch của 1 tài khoản theo thứ tự giao dịch mới nhất lên đầu
    async getHistory(accId: string, n: number) {
        return this.transactionModel.find({ AccID: accId })
            .sort({ DateOfTrans: -1 })
            .limit(n)
            .exec();
    }

    // 3) Thực hiện chuyển khoản cho tài khoản khác
    async transferMoney(fromAccId: string, toAccId: string, amount: number) {
        let fromAccount = await this.accountService.findById(fromAccId);
        let toAccount = await this.accountService.findById(toAccId);

        if (!fromAccount) throw new HttpException('Sender account not found', HttpStatus.NOT_FOUND);
        if (!toAccount) throw new HttpException('Receiver account not found', HttpStatus.NOT_FOUND);

        // Kiểm tra tài khoản chuyển có đủ tiền trước khi chuyển khoản
        if (fromAccount.Balance < amount) {
            throw new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);
        }

        // Cập nhật số dư
        fromAccount.Balance -= amount;
        toAccount.Balance += amount;
        
        await fromAccount.save();
        await toAccount.save();

        // Ghi lại giao dịch rút tiền cho người gửi
        await this.transactionModel.create({
            AccID: fromAccId,
            TransMoney: amount,
            TransType: 2, // Tiền rút
            DateOfTrans: new Date()
        });

        // Ghi lại giao dịch nhận tiền cho người nhận
        await this.transactionModel.create({
            AccID: toAccId,
            TransMoney: amount,
            TransType: 1, // Tiền gửi
            DateOfTrans: new Date()
        });

        return { msg: 'Transfer success' };
    }

    // 4) Tìm kiếm các loại giao dịch của 1 tài khoản theo khoảng thời gian
    async searchByDate(accId: string, startDate: Date, endDate: Date) {
        return this.transactionModel.find({
            AccID: accId,
            DateOfTrans: {
                $gte: startDate,
                $lte: endDate
            }
        }).exec();
    }
}
