import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class LoginCommand extends BaseCommand {
  @IsString()
  emailOrUsername: string;
  @IsString()
  password: string;
}
