import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { Account } from './account.model';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async create(account: Account): Promise<Account> {
    return this.accountRepository.create(account);
  }

  async findAll(): Promise<Account[]> {
    return this.accountRepository.findAll();
  }

  async findById(id: string): Promise<Account> {
    return this.accountRepository.findById(id);
  }

  async findByEmail(email: string): Promise<Account> {
    return this.accountRepository.findByEmail(email);
  }

  async delete(id: string): Promise<void> {
    return this.accountRepository.delete(id);
  }
}
