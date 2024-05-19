import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
        table.increments('id').primary(),
        table.string('car_name', 255).notNullable(),
        table.string('price', 10).notNullable(),
        table.boolean('avaibility').notNullable().defaultTo(false),
        table.string('start_rent', 20).notNullable(),
        table.string('end_rent', 20).notNullable(),
        table.string('img', 100).notNullable(),
        table.integer('transmission_id', 10).notNullable().references('id').inTable("transmissions").onDelete("Cascade"),
        table.integer('brand_id', 10).notNullable().references('id').inTable("brands").onDelete("Cascade"),
        table.integer('category_id', 10).notNullable().references('id').inTable("categories").onDelete("Cascade")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("cars")
}

