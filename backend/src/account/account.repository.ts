import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';
import { BaseRepository } from 'src/shared/repositories/base-repository';

@Injectable()
export class AccountRepository extends BaseRepository<Account> {
  constructor(@InjectModel(Account.name) accountModel: Model<Account>) {
    super(accountModel);
  }

  async findAll() {
    return this.find({});
  }

  async findByEmailAndUsername(email: string, username: string) {
    return this.findOne({ email, username });
  }

  async findByEmail(email: string) {
    return this.findOne({ email });
  }

  async findByUsername(username: string) {
    return this.findOne({ username });
  }
}
