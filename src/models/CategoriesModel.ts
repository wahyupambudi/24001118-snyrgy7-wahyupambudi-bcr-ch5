import { Model, ModelObject } from "objection";

export class CategoriesModel extends Model {
    id!: number;
    category_name!: string;

    static get tableName() {
        return "categories"
    }
}

export type Cars = ModelObject<CategoriesModel>;