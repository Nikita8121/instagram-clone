import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { PostRepository } from '../../post.repository';
import { LikePostCommand } from './like-post.command';

@Injectable()
export class LikePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: LikePostCommand) {
    return this.postRepository;
  }
}
