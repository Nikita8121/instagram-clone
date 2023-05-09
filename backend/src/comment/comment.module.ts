import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CreateComment } from './usecases/create-comment/create-comment.usecase';
import { PostModule } from 'src/post/post.module';
import { CommentRepository } from './comment.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    PostModule,
  ],
  controllers: [CommentController],
  providers: [CommentRepository, CreateComment],
})
export class CommentModule {}
