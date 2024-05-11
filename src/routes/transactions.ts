import { FastifyInstance } from 'fastify'
import knex from 'knex'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transaction')
      .where('amount', 1000)
      .insert({
        id: crypto.randomUUID(),
        title: 'transaction test',
        amount: 1000,
      })
      .returning('*')

    return transaction
  })
}
