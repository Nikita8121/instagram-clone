import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class LikeCommentCommand extends BaseCommand {
  @IsString()
  account: string;
  @IsString()
  commentId: string;
}
