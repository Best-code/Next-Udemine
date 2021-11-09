const Pool = require('pg').Pool

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password: 'Dbdp98kt!',
    port: 5432,
    database: 'udemine'
})

module.exports=pool