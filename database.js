// Handle Database Connection

const pg = require('pg');

const pool = new pg.Pool({
    connectionString: `postgres://ouelzbac:rKydrqFIry2UOvnxVEOFwsH_ihQW8l69@tiny.db.elephantsql.com/ouelzbac`,
    max: 5,
    ssl: {
        rejectUnauthorized: true,
    },

})

module.exports = pool;
pool.query('SELECT NOW()').then((response)=>{
    // console.log(response)
    console.log(response.rows[0]) //current time
})