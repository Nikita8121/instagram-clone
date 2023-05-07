import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async isAccountExists({
    email,
    username,
  }: {
    email: string;
    username: string;
  }) {
    return this.accountRepository.findByEmailAndUsername(email, username);
  }
}
