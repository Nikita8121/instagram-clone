import { IsString } from 'class-validator';
import { IMedia } from '../interfaces/media.interface';

export class MediaDto implements IMedia {
  @IsString()
  url: string;
  @IsString()
  alt: string;
}
