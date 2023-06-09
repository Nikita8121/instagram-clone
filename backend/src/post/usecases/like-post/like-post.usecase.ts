import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../post.repository';
import { LikePostCommand } from './like-post.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class LikePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: LikePostCommand) {
    const like = await this.postRepository.addLike(
      command.postId,
      command.account,
    );
    if (!like.modified) {
      throw new ApiException("post doesn't exists");
    }
    return like;
  }
}
