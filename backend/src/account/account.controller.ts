import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { AccountId } from 'src/shared/decorators/account-id.decorator';
import { FollowDto } from './dto/follow.dto';
import { Follow } from './usecases/follow/follow.usecase';
import { FollowCommand } from './usecases/follow/follow.command';

@Controller('account')
export class AccountController {
  constructor(private readonly followUseCase: Follow) {}
  @Post('follow')
  @UseGuards(JwtAuthGuard)
  async follow(@AccountId() accountId: string, @Body() dto: FollowDto) {
    await this.followUseCase.execute(
      FollowCommand.create({
        from: accountId,
        to: dto.to,
      }),
    );
  }
}
