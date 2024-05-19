import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { car_name: "Pagani Zonda", price: "Rp. 200.000", avaibility: true, start_rent: "2024-05-20", end_rent: "2024-05-24", img: "https://example.cloudinary.com", transmission_id: 1, brand_id: 1, category_id: 1, createdAt:" 2024-05-19", updatedAt: " 2024-05-19"},
        { car_name: "Tesla Sport", price: "Rp. 400.000", avaibility: true, start_rent: "2024-05-20", end_rent: "2024-05-24", img: "https://example.cloudinary.com", transmission_id: 2, brand_id: 2, category_id: 2, createdAt:" 2024-05-19", updatedAt: " 2024-05-19"},
        { car_name: "Toyota Slim", price: "Rp. 300.000", avaibility: false, start_rent: "2024-05-20", end_rent: "2024-05-24", img: "https://example.cloudinary.com", transmission_id: 2, brand_id: 2, category_id: 2, createdAt:" 2024-05-19", updatedAt: " 2024-05-19"}
    ]);
};
