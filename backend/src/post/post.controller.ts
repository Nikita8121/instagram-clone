import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FilesService } from '../files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreatePost } from './usecases/create-post/create-post.usecase';
import { User } from 'src/shared/decorators/user.decorator';

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
    /* @User() user,
    @Req() req, */
    @UploadedFiles() files: Express.Multer.File[],
    @Body() dto: CreatePostDto,
  ) {
    /* const media = await this.filesService.uploadFile(files);
    console.log(media); */
    /* console.log(req);
    console.log(dto);
    console.log(user); */
    return;
  }
}
