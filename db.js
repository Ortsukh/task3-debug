const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'goodwin1', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./models/user')(Sequelize, sequelize);
db.game = require('./models/game')(Sequelize, sequelize);

module.exports = db