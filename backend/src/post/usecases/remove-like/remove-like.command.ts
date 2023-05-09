import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class RemoveLikeCommand extends BaseCommand {
  @IsString()
  account: string;
  @IsString()
  postId: string;
}
