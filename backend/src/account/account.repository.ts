import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async create(account: Account): Promise<Account> {
    const createdAccount = new this.accountModel(account);
    return createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findById(id: string): Promise<Account> {
    return this.accountModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Account> {
    return this.accountModel.findOne({ email }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.accountModel.findByIdAndDelete(id).exec();
  }
}
