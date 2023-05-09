import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './comment.model';

@Injectable()
export class PostRepository {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async create(post: Omit<Post, 'account'> & { account: string }) {
    const createdPost = new this.postModel({
      ...post,
      account: new Types.ObjectId(post.account),
    });
    return (await createdPost.save()).toObject();
  }

  async findAll() {
    return this.postModel.find().exec();
  }

  async findById(id: string) {
    return this.postModel.findById(id).exec();
  }

  async addLike(postId: string, account: string) {
    const post = await this.findById(postId);
    const isLikeExists = post.likes.find(
      (like) => like.account.toString() === account,
    );
    if (isLikeExists) {
      throw new Error(`post already liked`);
    }
    post.likes.push({ account: new Types.ObjectId(account) });
    return post.save();
  }

  async removeLike(postId: string, account: string) {
    const post = await this.findById(postId);
    const likeIndex = post.likes.findIndex(
      (like) => like.account.toString() === account,
    );

    const isLikeExists = likeIndex >= 0;

    if (!isLikeExists) {
      throw new Error(`like no exists`);
    }
    post.likes.splice(likeIndex, 1);
    return post.save();
  }

  async delete(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id).exec();
  }
}
