import { Module } from '@nestjs/common';
import { FileService } from './file.sevice';

@Module({
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
