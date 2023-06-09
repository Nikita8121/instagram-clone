import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Like, Post } from './post.model';
import { BaseRepository } from 'src/shared/repositories/base-repository';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(@InjectModel(Post.name) postModel: Model<Post>) {
    super(postModel);
  }

  async createPost(post: Omit<Post, 'account'> & { account: string }) {
    return this.create({
      ...post,
      account: this.convertStringToObjectId(post.account),
    });
  }

  async addLike(postId: string, account: string) {
    return this.updateOne(
      { _id: postId },
      {
        $addToSet: {
          likes: { account: this.convertStringToObjectId(account) } as Like,
        },
      },
    );
  }

  async removeLike(postId: string, account: string) {
    return this.updateOne(
      { _id: postId },
      {
        $pullAll: {
          likes: [{ account: this.convertStringToObjectId(account) }] as Like[],
        },
      },
    );
  }

  async addComment(postId: string) {
    return this.updateOne(
      { _id: postId },
      {
        $inc: { commentsAmount: 1 },
      },
    );
  }
}
