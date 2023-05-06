import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async create(account: Account) {
    const createdAccount = new this.accountModel(account);
    return (await createdAccount.save()).toObject();
  }

  async findAll() {
    return this.accountModel.find().exec();
  }

  async findById(id: string) {
    return this.accountModel.findById(id).exec();
  }

  async findByEmail(email: string) {
    return this.accountModel.findOne({ email }).exec();
  }

  async findByUsername(username: string) {
    return this.accountModel.findOne({ username }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.accountModel.findByIdAndDelete(id).exec();
  }
}
