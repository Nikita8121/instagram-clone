import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../comment.repository';
import { CreateCommentCommand } from './create-comment.command';
import { PostRepository } from '../../../post/post.repository';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class CreateComment {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly commentRepository: CommentRepository,
  ) {}
  async execute(command: CreateCommentCommand) {
    const isPostExists = await this.postRepository.isExists(command.postId);

    if (!isPostExists) {
      throw new ApiException("post doesn't exists");
    }

    const comment = await this.commentRepository.createComment(
      command.postId,
      command.accountId,
      command.text,
    );
    await this.postRepository.addComment(command.postId);

    return comment;
  }
}
