import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CreateComment } from './usecases/create-comment/create-comment.usecase';
import { PostModule } from 'src/post/post.module';
import { CommentRepository } from './comment.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment.model';
import { CreateReply } from './usecases/create-reply/create-reply.usecase';
import { LikeComment } from './usecases/like-comment/like-comment.usecase';
import { LikeReply } from './usecases/like-reply/like-reply.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    PostModule,
  ],
  controllers: [CommentController],
  providers: [
    CommentRepository,
    CreateComment,
    CreateReply,
    LikeComment,
    LikeReply,
  ],
})
export class CommentModule {}
