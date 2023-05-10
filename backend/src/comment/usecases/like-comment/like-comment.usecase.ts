import { Injectable } from '@nestjs/common';

import { LikeCommentCommand } from './like-comment.command';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { CommentRepository } from 'src/comment/comment.repository';

@Injectable()
export class LikeComment {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(command: LikeCommentCommand) {
    const like = await this.commentRepository.addLike(
      command.commentId,
      command.account,
    );
    if (!like.modified) {
      throw new ApiException("comment doesn't exists");
    }
    return like;
  }
}
