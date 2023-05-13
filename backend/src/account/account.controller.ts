import {
  Body,
  Controller,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { AccountId } from 'src/shared/decorators/account-id.decorator';
import { FollowDto } from './dto/follow.dto';
import { Follow } from './usecases/follow/follow.usecase';
import { FollowCommand } from './usecases/follow/follow.command';
import { UnfollowCommand } from './usecases/unfollow/unfollow.command';
import { Unfollow } from './usecases/unfollow/unfollow.usecase';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../files/files.service';
import { AccountRepository } from './account.repository';

@Controller('account')
export class AccountController {
  constructor(
    private readonly followUseCase: Follow,
    private readonly unfollowUseCase: Unfollow,
    private readonly filesService: FilesService,
    private readonly accountRepository: AccountRepository,
  ) {}
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

  @Post('unfollow')
  @UseGuards(JwtAuthGuard)
  async unfollow(@AccountId() accountId: string, @Body() dto: FollowDto) {
    await this.unfollowUseCase.execute(
      UnfollowCommand.create({
        from: accountId,
        to: dto.to,
      }),
    );
  }

  @Put('change-avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async changeAvatar(
    @AccountId() accountId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const avatarFile = (await this.filesService.uploadFile([file]))[0];
    await this.accountRepository.updateAvatar(accountId, avatarFile.url);
  }
}
