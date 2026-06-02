import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionDetails, TransactionDetailsSchema } from './transaction.model';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TransactionDetails.name,
        schema: TransactionDetailsSchema
      }
    ]),
    AccountModule
  ],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule { }
