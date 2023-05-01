import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { isEmail } from 'class-validator';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async isAccountExists({
    email,
    username,
  }: {
    email?: string;
    username?: string;
  }) {
    if (email && username) {
      return (
        (await this.accountRepository.findByEmail(email)) ||
        (await this.accountRepository.findByUsername(username))
      );
    } else if (email) {
      return this.accountRepository.findByEmail(email);
    } else if (username) {
      return this.accountRepository.findByUsername(username);
    } else {
      throw new Error('should pass or username or emaail');
    }
  }
}
