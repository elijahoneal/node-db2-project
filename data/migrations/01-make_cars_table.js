// DO YOUR MAGIC
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('vin').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.numeric('mileage').notNullable();
        tbl.string('title');
        tbl.string('transmission');
    })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('cars')
}