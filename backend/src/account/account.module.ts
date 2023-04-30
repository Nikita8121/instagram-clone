import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.model';
import { CreateAccount } from './usecases/create-account/create-account.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [CreateAccount, AccountRepository],
  controllers: [AccountController],
  exports: [CreateAccount],
})
export class AccountModule {}
