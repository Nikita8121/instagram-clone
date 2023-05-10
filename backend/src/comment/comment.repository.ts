import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, Like, Reply } from './comment.model';
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

  async createReply({
    commentId,
    ...rest
  }: Omit<Reply, 'from' | 'to' | 'likes'> & {
    from: string;
    to: string;
    commentId: string;
  }) {
    return this.update(
      { _id: commentId },
      {
        $push: {
          replies: {
            ...rest,
            from: this.convertStringToObjectId(rest.from),
            to: this.convertStringToObjectId(rest.to),
          } as Reply,
        },
      },
    );
  }

  async addLike(commentId: string, account: string) {
    return this.updateOne(
      { _id: commentId },
      {
        $addToSet: {
          likes: { account: this.convertStringToObjectId(account) } as Like,
        },
      },
    );
  }

  async addLikeToReply(commentId: string, replyId: string, account: string) {
    return this.updateOne(
      { _id: commentId },
      {
        $addToSet: {
          'replies.$[outer].likes': {
            account: this.convertStringToObjectId(account),
          } as Like,
        },
      },
      {
        arrayFilters: [
          {
            'outer._id': this.convertStringToObjectId(replyId),
          },
        ],
      },
    );
  }
}
