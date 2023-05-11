import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class DeleteReplyCommand extends BaseCommand {
  @IsString()
  commentId: string;
  @IsString()
  replyId: string;
}
