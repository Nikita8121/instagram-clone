import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetCommentsQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page = 0;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit = 10;
}
