import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../comment.repository';
import { DeleteCommentCommand } from './delete-comment.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class DeleteComment {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(command: DeleteCommentCommand) {
    const comment = await this.commentRepository.removeComment(
      command.commentId,
    );

    if (!comment) throw new ApiException("comment doesn't exists");

    return comment;
  }
}
