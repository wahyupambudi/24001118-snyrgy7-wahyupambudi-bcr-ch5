import { Model, ModelObject } from "objection";

export class BrandsModel extends Model {
    id!: number;
    brand_model!: string;

    static get tableName() {
        return "brands"
    }
}

export type Cars = ModelObject<BrandsModel>;