import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.model';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Account.name,
          schema: AccountSchema
        }
      ])
    ],
  providers: [AccountService],
  controllers: [AccountController]
})
export class AccountModule {}
