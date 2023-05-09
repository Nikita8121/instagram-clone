import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostSchema, Post } from './post.model';
import { FilesModule } from 'src/files/files.module';
import { PostService } from './post.service';
import { CreatePost } from './usecases/create-post/create-post.usecase';
import { PostRepository } from './post.repository';
import { LikePost } from './usecases/like-post/like-post.usecase';
import { RemoveLike } from './usecases/remove-like/remove-like.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    FilesModule,
  ],
  controllers: [PostController],
  providers: [PostService, CreatePost, PostRepository, LikePost, RemoveLike],
  exports: [PostRepository],
})
export class PostModule {}
