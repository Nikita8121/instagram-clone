import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccountId } from 'src/shared/decorators/account-id.decorator';
import { CreateComment } from './usecases/create-comment/create-comment.usecase';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateReplyDto } from './dto/create-reply.dto';
import { CreateReply } from './usecases/create-reply/create-reply.usecase';
import { LikeCommentDto } from './dto/like-comment.dto';
import { LikeComment } from './usecases/like-comment/like-comment.usecase';
import { LikeReplyDto } from './dto/like-reply.dto';
import { LikeReply } from './usecases/like-reply/like-reply.usecase';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly createCommentUseCase: CreateComment,
    private readonly createReplyUseCase: CreateReply,
    private readonly likeCommentUseCase: LikeComment,
    private readonly likeReplyUseCase: LikeReply,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@AccountId() accountId: string, @Body() dto: CreateCommentDto) {
    return this.createCommentUseCase.execute({
      accountId,
      text: dto.text,
      postId: dto.postId,
    });
  }

  @Post('create-reply')
  @UseGuards(JwtAuthGuard)
  async createReply(
    @AccountId() accountId: string,
    @Body() dto: CreateReplyDto,
  ) {
    return this.createReplyUseCase.execute({
      from: accountId,
      ...dto,
    });
  }

  @Post('like')
  @UseGuards(JwtAuthGuard)
  async likeComment(
    @AccountId() accountId: string,
    @Body() dto: LikeCommentDto,
  ) {
    return this.likeCommentUseCase.execute({
      account: accountId,
      commentId: dto.commentId,
    });
  }

  @Post('like-reply')
  @UseGuards(JwtAuthGuard)
  async likeReply(@AccountId() accountId: string, @Body() dto: LikeReplyDto) {
    return this.likeReplyUseCase.execute({
      account: accountId,
      ...dto,
    });
  }
}
