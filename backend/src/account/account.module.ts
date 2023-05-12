import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.model';
import { CreateAccount } from './usecases/create-account/create-account.usecase';
import { AccountService } from './account.service';
import { Follow } from './usecases/follow/follow.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [CreateAccount, AccountRepository, AccountService, Follow],
  controllers: [AccountController],
  exports: [CreateAccount, AccountRepository],
})
export class AccountModule {}
