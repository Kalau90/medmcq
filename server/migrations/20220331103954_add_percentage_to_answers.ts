import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('question_answers', t => {
        t.integer('percentage')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('question_answers', t => {
        t.dropColumn('percentage')
    })
}

