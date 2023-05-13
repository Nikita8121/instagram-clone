import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account.model';
import { CreateAccount } from './usecases/create-account/create-account.usecase';
import { AccountService } from './account.service';
import { Follow } from './usecases/follow/follow.usecase';
import { Unfollow } from './usecases/unfollow/unfollow.usecase';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    FilesModule,
  ],
  providers: [
    CreateAccount,
    AccountRepository,
    AccountService,
    Follow,
    Unfollow,
  ],
  controllers: [AccountController],
  exports: [CreateAccount, AccountRepository],
})
export class AccountModule {}
