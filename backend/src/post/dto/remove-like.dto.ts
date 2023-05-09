import { IsString } from 'class-validator';

export class RemoveLikeDto {
  @IsString()
  postId: string;
}
