import { Module } from '@nestjs/common';
/* import { FilesController } from './files.controller'; */
import { FilesService } from './files.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
  ],
  /*   controllers: [FilesController], */
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
