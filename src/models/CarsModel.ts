import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
    id!: number;
    car_name!: string;
    price!: string;
    avaibility!: boolean;
    start_rent!: string;
    end_rent!: string;
    img!: string;
    transmission_id!: number;
    brand_id!: number;
    category_id!: number;
    createdAt!: string;
    updatedAt!: string;
    static get tableName() {
        return "cars"
    }
}

export type Cars = ModelObject<CarsModel>;