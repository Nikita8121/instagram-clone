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

  async removeComment(postId: string) {
    return this.deleteById(postId);
  }

  async removeReply(commentId: string, replyId: string) {
    return this.updateOne(
      { _id: commentId },
      {
        $pull: {
          replies: {
            _id: this.convertStringToObjectId(replyId),
          },
        },
      },
    );
  }

  async removeLike(comment: string, account: string) {
    return this.updateOne(
      { _id: comment },
      {
        $pullAll: {
          likes: [{ account: this.convertStringToObjectId(account) }] as Like[],
        },
      },
    );
  }

  async removeLikeFromReply(comment: string, reply: string, account: string) {
    return this.updateOne(
      { _id: comment },
      {
        $pull: {
          'replies.$[outer].likes': [
            { account: this.convertStringToObjectId(account) },
          ] as Like[],
        },
      },
      {
        arrayFilters: [
          {
            'outer._id': this.convertStringToObjectId(reply),
          },
        ],
      },
    );
  }

  public async getList(post: string, skip = 0, limit = 10) {
    const totalItemsCount = await this.count({
      post: this.convertStringToObjectId(post),
    });

    const items = await this._model
      .find({ post: this.convertStringToObjectId(post) })
      .skip(skip)
      .limit(limit)
      .populate('account')
      .populate('replies.to')
      .populate('replies.from');

    return { totalCount: totalItemsCount, data: items };
  }
}
