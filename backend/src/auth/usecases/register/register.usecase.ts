import { CreateAccount } from 'src/account/usecases/create-account/create-account.usecase';
import { RegisterCommand } from './register.command';

export class Register {
  constructor(private readonly createAccountUseCase: CreateAccount) {}
  async execute(data: RegisterCommand) {
    const newAccount = await this.createAccountUseCase.execute(data);
    return {
      account: newAccount,
      token: '',
    };
  }
}
