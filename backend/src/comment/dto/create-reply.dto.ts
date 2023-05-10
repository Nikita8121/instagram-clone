import { IsString } from 'class-validator';

export class CreateReplyDto {
  @IsString()
  to: string;
  @IsString()
  text: string;
  @IsString()
  postId: string;
  @IsString()
  commentId: string;
}
