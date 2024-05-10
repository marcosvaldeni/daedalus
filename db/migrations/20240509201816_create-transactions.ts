import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table
      .decimal('amount', 10, 2)
      .notNullable()
      .defaultTo(knex.fn.now())
      .notNullable()
    table.timestamp('created_at')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
