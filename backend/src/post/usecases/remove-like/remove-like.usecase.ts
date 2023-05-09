import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../post.repository';
import { RemoveLikeCommand } from './remove-like.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class RemoveLike {
  constructor(private readonly postRepository: PostRepository) {}
  async execute(command: RemoveLikeCommand) {
    const like = await this.postRepository.removeLike(
      command.postId,
      command.account,
    );
    if (!like.modified) {
      throw new ApiException("post doesn't exists");
    }
    return like;
  }
}
