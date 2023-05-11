import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../comment.repository';
import { DeleteReplyCommand } from './delete-reply.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class DeleteReply {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(command: DeleteReplyCommand) {
    const comment = await this.commentRepository.removeReply(
      command.commentId,
      command.replyId,
    );

    if (!comment) throw new ApiException("comment doesn't exists");

    return comment;
  }
}
