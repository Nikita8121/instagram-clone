import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class CreateReplyCommand extends BaseCommand {
  @IsString()
  from: string;
  @IsString()
  to: string;
  @IsString()
  text: string;
  @IsString()
  postId: string;
  @IsString()
  commentId: string;
}
