import { Module } from '@nestjs/common';
import { CarRecognitionService } from './car-recognition.service';
import { CarRecognitionController } from './car-recognition.controller';

@Module({
  controllers: [CarRecognitionController],
  providers: [CarRecognitionService],
})
export class CarRecognitionModule {}
