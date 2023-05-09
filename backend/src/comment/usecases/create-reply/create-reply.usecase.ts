import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../comment.repository';
import { CreateReplyCommand } from './create-reply.command';
import { PostRepository } from '../../../post/post.repository';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class CreateReply {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly commentRepository: CommentRepository,
  ) {}
  async execute(command: CreateReplyCommand) {
    const isPostExists = await this.postRepository.isExists(command.postId);

    if (!isPostExists) throw new ApiException("post doesn't exists");

    const isCommentExists = await this.commentRepository.isExists(
      command.commentId,
    );

    if (!isCommentExists) throw new ApiException("comment doesn't exists");

    /* const comment = await this.commentRepository.createComment(
      command.postId,
      command.accountId,
      command.text,
    );
    await this.postRepository.addComment(command.postId);

    return comment; */
  }
}
