const knex = require('knex');
const config = require('./knexfile.js');
const db = knex(config.development)

module.exports = {
    create,
    remove
}

async function create(x){
    const [id] = await db('dummy').insert(x);
}

function remove(id){
    return db('dummy').where({id}).del();
}