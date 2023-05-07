import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { BaseCommand } from 'src/shared/commands/base.command';
import { MediaDto } from 'src/shared/dto/media.dto';

export class CreatePostCommand extends BaseCommand {
  @IsString()
  account: string;
  @IsString()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => MediaDto)
  content: MediaDto[];
}
