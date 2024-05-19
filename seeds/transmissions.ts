import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("transmissions").del();

    // Inserts seed entries
    await knex("transmissions").insert([
        { transmission_name: "Manual" },
        { transmission_name: "Automatic" },
        { transmission_name: "AutoManual" },
        { transmission_name: "CVT" }
    ]);
};
