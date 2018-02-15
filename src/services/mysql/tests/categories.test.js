const test = require('ava')

const {
    connection,
    errorHandler
} = require('./setup')

const categories = require('../categories')({
    connection,
    errorHandler
})

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

test('Criação de categoria', async t => {
    const result = await categories.save('category-test')
    t.is(result.category.name, 'category-test')
})