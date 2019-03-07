
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dummy', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dummy');
};
