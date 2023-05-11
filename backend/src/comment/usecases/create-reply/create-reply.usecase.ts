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
    const isRepliedToYourself = command.from === command.to;

    if (isRepliedToYourself)
      throw new ApiException('you cannot reply to yourself');

    const isPostExists = await this.postRepository.isExists(command.postId);

    if (!isPostExists) throw new ApiException("post doesn't exists");

    const isCommentExists = await this.commentRepository.isExists(
      command.commentId,
    );

    console.log(isCommentExists);
    if (!isCommentExists) throw new ApiException("comment doesn't exists");

    const reply = await this.commentRepository.createReply({ ...command });

    await this.postRepository.addComment(command.postId);

    return reply;
  }
}
