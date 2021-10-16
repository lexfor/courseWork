import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { editFileName, imageFileFilter } from '../utilits/file-upload.utilits';
import { diskStorage } from 'multer';
import { CarRecognitionService } from './car-recognition.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CarDataInterface } from './interface/car-data.interface';

@Controller('car-recognition')
export class CarRecognitionController {
  constructor(private readonly carRecognitionService: CarRecognitionService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './cars',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file): Promise<CarDataInterface> {
    const response = await this.carRecognitionService.recognize(
      `./${file.path}`.replace(/\\/g, '/'),
    );
    return response;
  }
}
