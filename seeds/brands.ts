import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("brands").del();

    // Inserts seed entries
    await knex("brands").insert([
        { id: 1, brand_name: "Honda" },
        { id: 2, brand_name: "Tesla" },
        { id: 3, brand_name: "Toyota" }
    ]);
};
