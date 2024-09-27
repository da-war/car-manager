import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private cars = CARS;
    public async getCar() {
        return this.cars;
    }

    public async postCar(car) {
        return this.cars.push(car);
    }

    public async putCarById(carId:number, car) {
        const carIndex = this.cars.findIndex((car) => car.id === carId);
        if (carIndex === -1) {
            throw new HttpException('Car not found', 404);
        }
        this.cars[carIndex] = car;
        return car;
    }



    public async deleteCarById(carId:number) {
        const carIndex= this.cars.findIndex((car) => car.id === carId);
        if (carIndex === -1) {
            throw new HttpException('Car not found', 404);
        }
        this.cars.splice(carIndex, 1);
        return this.cars;
       
    }

    public async getCarById(carId:number) {
        const car = this.cars.find((car) => car.id === carId);
        if (!car) {
            throw new HttpException('Car not found', 404);
        }
        return car;
    }

    public async getCarByBrand(brand) {
        const car = this.cars.find((car) => car.brand === brand);
        if (!car) {
            return 'Car not found';
        }
        return car;
    }

}
