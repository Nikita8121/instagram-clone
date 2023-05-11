import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Login } from './usecases/login/login.usecase';
import { Register } from './usecases/register/register.usecase';
import { RegisterDto } from './dto/register.dto';
import { RegisterCommand } from './usecases/register/register.command';
import { LoginCommand } from './usecases/login/login.command';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: Login,
    private readonly registerUseCase: Register,
  ) {}
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(LoginCommand.create(dto));
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.registerUseCase.execute(RegisterCommand.create(dto));
  }
}
