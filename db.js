const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'goodwin1', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
})

// sequelize.authenticate().then(
//     function success() {
//         console.log("Connected to DB");
//     },

//     function fail(err) {
//         console.log(`Error: ${err}`);
//     }
// )
const sequelize1 = async (connector) => {
    try {
      await connector.authenticate();
      console.log("Connected!");
    } catch (err) {
      console.log(err);
    }
  };

  sequelize1(sequelize);
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./models/user')(Sequelize, sequelize);
db.game = require('./models/game')(Sequelize, sequelize);

module.exports = db