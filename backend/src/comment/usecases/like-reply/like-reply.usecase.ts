import { Injectable } from '@nestjs/common';

import { LikeReplyCommand } from './like-reply.command';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { CommentRepository } from 'src/comment/comment.repository';

@Injectable()
export class LikeReply {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(command: LikeReplyCommand) {
    const like = await this.commentRepository.addLikeToReply(
      command.commentId,
      command.replyId,
      command.account,
    );
    if (!like.modified) {
      throw new ApiException("reply doesn't exists");
    }
    return like;
  }
}
