import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('question_tag', t => {
        t.integer('is_removed').defaultTo(0)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('question_tag', t => {
        t.dropColumn('is_removed')
    })
}

