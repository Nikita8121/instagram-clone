import { CreateAccount } from 'src/account/usecases/create-account/create-account.usecase';
import { RegisterCommand } from './register.command';
import { AuthService } from 'src/auth/auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Register {
  constructor(
    private readonly authService: AuthService,
    private readonly createAccountUseCase: CreateAccount,
  ) {}
  async execute(data: RegisterCommand) {
    const newAccount = await this.createAccountUseCase.execute(data);
    return {
      account: newAccount,
      token: (
        await this.authService.generateUserToken(newAccount._id.toString())
      ).token,
    };
  }
}
