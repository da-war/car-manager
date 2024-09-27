import { Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private cars = CARS;
    public async getCar() {
        return this.cars;
    }
}
