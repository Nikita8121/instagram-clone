import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostSchema, Post } from './post.model';
import { FilesModule } from 'src/files/files.module';
import { PostService } from './post.service';
import { CreatePost } from './usecases/create-post/create-post.usecase';
import { PostRepository } from './post.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    FilesModule,
  ],
  controllers: [PostController],
  providers: [PostService, CreatePost, PostRepository],
})
export class PostModule {}
