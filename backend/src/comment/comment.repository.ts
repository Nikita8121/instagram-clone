import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.model';
import { BaseRepository } from 'src/shared/repositories/base-repository';

@Injectable()
export class CommentRepository extends BaseRepository<Comment> {
  constructor(@InjectModel(Comment.name) commentModel: Model<Comment>) {
    super(commentModel);
  }

  async createComment(post: string, account: string, text: string) {
    return this.create({
      post: this.convertStringToObjectId(post),
      account: this.convertStringToObjectId(account),
      text,
    });
  }
}
