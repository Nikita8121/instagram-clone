import { LoginCommand } from './login.command';
import { AccountRepository } from '../../../account/account.repository';
import { compare } from 'bcryptjs';
import { isEmail } from 'class-validator';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { AuthService } from '../../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Login {
  constructor(
    private readonly authService: AuthService,
    private readonly accountRepository: AccountRepository,
  ) {}
  async execute({ emailOrUsername, password }: LoginCommand) {
    const account = isEmail(emailOrUsername)
      ? await this.accountRepository.findByEmail(emailOrUsername)
      : await this.accountRepository.findByUsername(emailOrUsername);

    if (!account) throw new ApiException('account not found');

    const isPasswordCorrect = await compare(password, account.password);

    if (!isPasswordCorrect) throw new ApiException('wrong password');

    return {
      token: (await this.authService.generateUserToken(account.email)).token,
    };
  }
}
