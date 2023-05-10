import { IsString } from 'class-validator';

export class LikeReplyDto {
  @IsString()
  commentId: string;
  @IsString()
  replyId: string;
}
