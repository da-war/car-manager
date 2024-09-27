import { Injectable } from '@nestjs/common';
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

    public async putCar(car) {
        this.cars.map((carItem) => {
            if (carItem.id === car.id) {
                carItem = car;
            }
        });
        return car;
    }

    public async deleteCarById(carId) {
        const carIndex = this.cars.findIndex((car) => car.id === carId);
        if (carIndex === -1) {
            return 'Car not found';
        }
        this.cars.splice(carIndex, 1);
        return 'Car deleted';
    }

    public async getCarById(carId) {
        const car = this.cars.find((car) => car.id === carId);
        if (!car) {
            return 'Car not found';
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
