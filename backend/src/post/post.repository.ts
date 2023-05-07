import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.model';

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
    post.likes.push(new Types.ObjectId(account));
    return post.save();
  }

  async delete(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id).exec();
  }
}
