import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class RemoveLikeFromReplyCommand extends BaseCommand {
  @IsString()
  account: string;
  @IsString()
  commentId: string;
  @IsString()
  replyId: string;
}
