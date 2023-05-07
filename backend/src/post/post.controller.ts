import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
  Get,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FilesService } from '../files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreatePost } from './usecases/create-post/create-post.usecase';
import { AccountId } from 'src/shared/decorators/account-id.decorator';

@Controller('post')
export class PostController {
  constructor(
    private readonly createPostUseCase: CreatePost,
    private readonly filesService: FilesService,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @AccountId() accountId: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() dto: CreatePostDto,
  ) {
    const media = await this.filesService.uploadFile(files);
    return this.createPostUseCase.execute({
      ...dto,
      account: accountId,
      content: media.map((el) => ({ url: el.url, alt: '' })),
    });
  }

  /* @Get('get')
  async get() {
    const data = await this.postRepository.findAll();
    data[0]._id;
    return this.postRepository.findAll();
  } */
}
