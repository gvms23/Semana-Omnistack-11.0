exports.up = function (knex) {
  return knex.schema.createTable('caso', table => {
    table.increments();

    table.string('titulo').notNullable();
    table.string('descricao').notNullable();
    table.decimal('valor').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ong');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('caso');
};