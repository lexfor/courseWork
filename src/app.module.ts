import { Module } from '@nestjs/common';
import { CarRecognitionModule } from './car-recognition/car-recognition.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [CarRecognitionModule, MulterModule.register()],
})
export class AppModule {}
