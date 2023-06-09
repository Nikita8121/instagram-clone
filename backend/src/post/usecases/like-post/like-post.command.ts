import { IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class LikePostCommand extends BaseCommand {
  @IsString()
  account: string;
  @IsString()
  postId: string;
}
