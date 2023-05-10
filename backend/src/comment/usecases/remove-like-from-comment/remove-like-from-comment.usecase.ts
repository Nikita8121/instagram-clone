import { Injectable } from '@nestjs/common';

import { RemoveLikeCommand } from './remove-like-from-comment.command';
import { ApiException } from 'src/shared/exceptions/api.exception';
import { CommentRepository } from 'src/comment/comment.repository';

@Injectable()
export class RemoveLike {
  constructor(private readonly commentRepository: CommentRepository) {}
  async execute(command: RemoveLikeCommand) {
    /* const like = await this.commentRepository.removeLike(
      command.postId,
      command.account,
    );
    if (!like.modified) {
      throw new ApiException("post doesn't exists");
    }
    return like; */
  }
}
