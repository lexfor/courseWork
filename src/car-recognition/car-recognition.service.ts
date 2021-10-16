import { Injectable } from '@nestjs/common';
import { CarDataInterface } from './interface/car-data.interface';

@Injectable()
export class CarRecognitionService {
  recognize(filePath: string): CarDataInterface {
    return {
      mark: 'peugeot',
      model: '406',
      generation: 'rest',
      color: 'blue',
    };
  }
}
