import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
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
import { RemoveLike } from './usecases/remove-like-from-comment/remove-like-from-comment.usecase';
import { RemoveLikeDto } from './dto/remove-like.dto';
import { RemoveLikeFromReply } from './usecases/remove-like-from-reply/remove-like-from-reply.usecase';
import { RemoveLikeFromReplyDto } from './dto/remove-like-from-reply.dto';
import { RemoveLikeFromReplyCommand } from './usecases/remove-like-from-reply/remove-like-from-reply.command';
import { RemoveLikeCommand } from './usecases/remove-like-from-comment/remove-like-from-comment.command';
import { LikeReplyCommand } from './usecases/like-reply/like-reply.command';
import { LikeCommentCommand } from './usecases/like-comment/like-comment.command';
import { CreateReplyCommand } from './usecases/create-reply/create-reply.command';
import { CreateCommentCommand } from './usecases/create-comment/create-comment.command';
import { GetComments } from './usecases/get-comments/get-comments.usecase';
import { GetCommentsCommand } from './usecases/get-comments/get-comments.command';
import { GetCommentsQueryDto } from './dto/get-comments-query.dto';
import { DeleteComment } from './usecases/delete-comment/delete-comment.usecase';
import { DeleteCommentCommand } from './usecases/delete-comment/delete-comment.command';
import { DeleteReply } from './usecases/delete-reply/delete-reply.usecase';
import { DeleteReplyCommand } from './usecases/delete-reply/delete-reply.command';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly createCommentUseCase: CreateComment,
    private readonly createReplyUseCase: CreateReply,
    private readonly likeCommentUseCase: LikeComment,
    private readonly likeReplyUseCase: LikeReply,
    private readonly removeLikeUseCase: RemoveLike,
    private readonly removeLikeFromReplyUseCase: RemoveLikeFromReply,
    private readonly getCommentsUseCase: GetComments,
    private readonly deleteCommentUseCase: DeleteComment,
    private readonly deleteReplyUseCase: DeleteReply,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@AccountId() accountId: string, @Body() dto: CreateCommentDto) {
    return this.createCommentUseCase.execute(
      CreateCommentCommand.create({
        accountId,
        text: dto.text,
        postId: dto.postId,
      }),
    );
  }

  @Delete(':commentId')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('commentId') commentId: string) {
    return this.deleteCommentUseCase.execute(
      DeleteCommentCommand.create({ commentId }),
    );
  }

  @Delete(':commentId/:replyId')
  @UseGuards(JwtAuthGuard)
  async deleteReply(
    @Param('commentId') commentId: string,
    @Param('replyId') replyId: string,
  ) {
    return this.deleteReplyUseCase.execute(
      DeleteReplyCommand.create({ commentId, replyId }),
    );
  }

  @Get(':contentId')
  @UseGuards(JwtAuthGuard)
  async getByPostId(
    @Param('contentId') contentId: string,
    @Query() query: GetCommentsQueryDto,
  ) {
    return this.getCommentsUseCase.execute(
      GetCommentsCommand.create({ postId: contentId, ...query }),
    );
  }

  @Post('create-reply')
  @UseGuards(JwtAuthGuard)
  async createReply(
    @AccountId() accountId: string,
    @Body() dto: CreateReplyDto,
  ) {
    return this.createReplyUseCase.execute(
      CreateReplyCommand.create({
        from: accountId,
        ...dto,
      }),
    );
  }

  @Post('like')
  @UseGuards(JwtAuthGuard)
  async likeComment(
    @AccountId() accountId: string,
    @Body() dto: LikeCommentDto,
  ) {
    return this.likeCommentUseCase.execute(
      LikeCommentCommand.create({
        account: accountId,
        commentId: dto.commentId,
      }),
    );
  }

  @Post('like-reply')
  @UseGuards(JwtAuthGuard)
  async likeReply(@AccountId() accountId: string, @Body() dto: LikeReplyDto) {
    return this.likeReplyUseCase.execute(
      LikeReplyCommand.create({
        account: accountId,
        ...dto,
      }),
    );
  }

  @Post('remove-like')
  @UseGuards(JwtAuthGuard)
  async removeLike(@AccountId() accountId: string, @Body() dto: RemoveLikeDto) {
    return this.removeLikeUseCase.execute(
      RemoveLikeCommand.create({
        account: accountId,
        commentId: dto.commentId,
      }),
    );
  }

  @Post('remove-like-from-reply')
  @UseGuards(JwtAuthGuard)
  async removeLikeFromReply(
    @AccountId() accountId: string,
    @Body() dto: RemoveLikeFromReplyDto,
  ) {
    return this.removeLikeFromReplyUseCase.execute(
      RemoveLikeFromReplyCommand.create({
        account: accountId,
        replyId: dto.replyId,
        commentId: dto.commentId,
      }),
    );
  }
}
