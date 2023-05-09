import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccountId } from 'src/shared/decorators/account-id.decorator';
import { CreateComment } from './usecases/create-comment/create-comment.usecase';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('comment')
export class CommentController {
  constructor(private readonly createCommentUseCase: CreateComment) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@AccountId() accountId: string, @Body() dto: CreateCommentDto) {
    return this.createCommentUseCase.execute({
      accountId,
      text: dto.text,
      postId: dto.postId,
    });
  }
}
