import { Controller, Get, Post } from '@nestjs/common';

import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {}

    getCar() {
        return this.carService.getCar();
    }

    postCar() {
        return this.carService.postCar();
    }
 
    putCar() {
        return this.carService.putCar();
    }

    deleteCarById() {
        return this.carService.deleteCarById();
    }
 
    getCarById() {
        return this.carService.getCarById();
    }



}