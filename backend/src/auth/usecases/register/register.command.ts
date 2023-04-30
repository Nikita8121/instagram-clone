import { IsEmail, IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class RegisterCommand extends BaseCommand {
  @IsString()
  fullName: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
