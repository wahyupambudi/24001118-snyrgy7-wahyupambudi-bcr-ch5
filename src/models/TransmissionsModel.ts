import { Model, ModelObject } from "objection";

export class TransmissionsModel extends Model {
    id!: number;
    transmission_name!: string;

    static get tableName() {
        return "transmissions"
    }
}

export type Cars = ModelObject<TransmissionsModel>;