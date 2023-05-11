import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class DeleteCommentCommand extends BaseCommand {
  @IsString()
  commentId: string;
}
