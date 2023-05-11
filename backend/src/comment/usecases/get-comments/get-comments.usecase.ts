import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../comment.repository';
import { GetCommentsCommand } from './get-comments.command';

@Injectable()
export class GetComments {
  constructor(private readonly commentRepository: CommentRepository) {}
  execute(command: GetCommentsCommand) {
    return this.commentRepository.getList(
      command.postId,
      command.page * command.limit,
      command.limit,
    );
  }
}
