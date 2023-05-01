import { CreateAccountCommand } from './create-account.command';
import { Account } from 'src/account/account.model';
import { genSalt, hash } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../../account.repository';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class CreateAccount {
  private salt: string;
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly accountService: AccountService,
  ) {}

  async execute({
    fullName,
    username,
    email,
    password,
  }: CreateAccountCommand): Promise<Account> {
    if (!this.salt) {
      this.salt = await genSalt(10);
    }

    const isAccountExist = await this.accountService.isAccountExists({
      email,
      username,
    });

    if (isAccountExist) {
      throw new ApiException('account already exists');
    }

    const passwordHash = await hash(password, this.salt);

    const { password: hashedPassword, ...rest } =
      await this.accountRepository.create({
        fullName,
        username,
        email,
        password: passwordHash,
      });

    return;
  }
}
