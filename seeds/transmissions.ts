import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("transmissions").del();

    // Inserts seed entries
    await knex("transmissions").insert([
        { id: 1, transmission_name: "Manual" },
        { id: 2, transmission_name: "Automatic" },
        { id: 3, transmission_name: "AutoManual" },
        { id: 4, transmission_name: "CVT" }
    ]);
};
