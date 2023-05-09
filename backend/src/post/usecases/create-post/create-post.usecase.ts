import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../post.repository';
import { CreatePostCommand } from './create-post.command';

@Injectable()
export class CreatePost {
  constructor(private readonly postRepository: PostRepository) {}
  async execute(command: CreatePostCommand) {
    return this.postRepository.createPost({
      ...command,
    });
  }
}
