import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class UnfollowCommand extends BaseCommand {
  @IsString()
  to: string;
  @IsString()
  from: string;
}
