import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class CreateCommentCommand extends BaseCommand {
  @IsString()
  accountId: string;
  @IsString()
  text: string;
  @IsString()
  postId: string;
}
