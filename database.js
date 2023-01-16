
const pool = createPool({
    host: "localhost",
    user: "NewUser",
    password: "adarsh@sql",
    database: "Player",
    connectionLimit: 10
})

pool.query(`SELECT * FROM player.playerdetails;`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})