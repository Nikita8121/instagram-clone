import { IsString } from 'class-validator';

export class RemoveLikeDto {
  @IsString()
  commentId: string;
}
