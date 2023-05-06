import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  fullName: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
