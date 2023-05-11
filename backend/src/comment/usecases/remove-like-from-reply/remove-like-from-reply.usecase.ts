import { Injectable } from '@nestjs/common';

import { RemoveLikeFromReplyCommand } from './remove-like-from-reply.command';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { CommentRepository } from 'src/comment/comment.repository';

@Injectable()
export class RemoveLikeFromReply {
  constructor(private readonly commentRepository: CommentRepository) {}
  async execute(command: RemoveLikeFromReplyCommand) {
    const like = await this.commentRepository.removeLikeFromReply(
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
