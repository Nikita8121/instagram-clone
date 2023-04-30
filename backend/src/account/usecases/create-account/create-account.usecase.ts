import { CreateAccountCommand } from './create-account.command';
import { Account } from 'src/account/account.model';
import { genSalt, hash } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../../account.repository';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class CreateAccount {
  private salt: string;
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute({
    fullName,
    username,
    email,
    password,
  }: CreateAccountCommand): Promise<Account> {
    if (!this.salt) {
      this.salt = await genSalt(10);
    }

    const isAccountExist =
      (await this.accountRepository.findByEmail(email)) ||
      (await this.accountRepository.findByUsername(username));

    if (isAccountExist) {
      throw new ApiException('account already exists');
    }

    const passwordHash = await hash(password, this.salt);

    return this.accountRepository.create({
      fullName,
      username,
      email,
      password: passwordHash,
    });
  }
}
