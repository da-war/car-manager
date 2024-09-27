import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {}

    @Get()
    getCar() {
        return this.carService.getCar();
    }

    @Post()
    postCar(@Body() car:CarDto) {
        return this.carService.postCar(car);
    }
 
    @Put()
   putCarById(@Body() car:CarDto, @Param('id') id:number) {
        return this.carService.putCarById(id, car);    
    }

    @Delete('/:id')
    deleteCarById(@Param('id') id:number) {
        return this.carService.deleteCarById(id);
    }
 
    @Get('/:id')
    getCarById(@Param('id') id:number) {
        return this.carService.getCarById(id);
    }



}