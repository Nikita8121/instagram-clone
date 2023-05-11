import { IsString } from 'class-validator';

export class RemoveLikeFromReplyDto {
  @IsString()
  commentId: string;
  @IsString()
  replyId: string;
}
