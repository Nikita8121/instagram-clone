import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.model';

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(post: Post) {
    const createdAccount = new this.postModel(post);
    return (await createdAccount.save()).toObject();
  }

  async findAll() {
    return this.postModel.find().exec();
  }

  async findById(id: string) {
    return this.postModel.findById(id).exec();
  }

  async delete(id: string): Promise<void> {
    await this.postModel.findByIdAndDelete(id).exec();
  }
}
