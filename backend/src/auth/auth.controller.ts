import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './DTOs/login.dto';
import { Login } from './usecases/login/login.usecase';
import { Register } from './usecases/register/register.usecase';
import { RegisterDto } from './DTOs/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: Login,
    private readonly registerUseCase: Register,
  ) {}
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    console.log(dto);
    return this.registerUseCase.execute(dto);
  }
}
