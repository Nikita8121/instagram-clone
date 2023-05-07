import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-response-element.response';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {}

  async uploadFile(
    files: Express.Multer.File[],
  ): Promise<FileElementResponse[]> {
    const saveArray: MFile[] = [];
    const convertingPromises = [];
    files.forEach((file) => {
      if (file.mimetype.includes('image')) {
        const convertPromise = this.convertToWebP(file.buffer).then(
          (buffer) => {
            const uniqueId = uuidv4();
            saveArray.push(
              new MFile({
                originalname: `${uniqueId}.webp`,
                buffer,
              }),
            );
          },
        );

        convertingPromises.push(convertPromise);
      } else {
        saveArray.push(new MFile(file));
      }
    });

    await Promise.all(convertingPromises);

    return this.saveFiles(saveArray);
  }

  private async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const res: FileElementResponse[] = [];
    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `${this.configService.get('APP_URL')}/static/${dateFolder}/${
          file.originalname
        }`,
        name: file.originalname,
      });
    }
    return res;
  }

  private async convertToWebP(file: Buffer): Promise<Buffer> {
    return sharp(file).webp().toBuffer();
  }
}
