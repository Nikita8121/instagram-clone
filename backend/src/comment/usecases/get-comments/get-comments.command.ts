import { IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';

export class GetCommentsCommand extends BaseCommand {
  @IsString()
  postId: string;
  @IsNumber()
  @IsOptional()
  page = 0;

  @IsNumber()
  @IsOptional()
  limit = 10;
}
