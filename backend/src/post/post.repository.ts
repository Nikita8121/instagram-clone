import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.model';
import { BaseRepository } from 'src/shared/repositories/base-repository';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(@InjectModel(Post.name) postModel: Model<Post>) {
    super(postModel);
  }

  async addLike(postId: string, account: string) {
    /* const post = await this.findById(postId); */
    /*     const isLikeExists = post.likes.find(
      (like) => like.account.toString() === account,
    ); */
    /*     if (isLikeExists) {
      throw new Error(`post already liked`);
    } */
    /* post.likes.push({ account: new Types.ObjectId(account) });

    return post.save(); */

    return this.updateOne(
      { _id: postId },
      {
        $addToSet: {
          likes: { account: this.convertStringToObjectId(account) },
        },
      },
    );
  }

  async removeLike(postId: string, account: string) {
    return this.updateOne(
      { _id: postId },
      {
        $pullAll: {
          likes: [{ account: this.convertStringToObjectId(account) }],
        },
      },
    );
  }
}
