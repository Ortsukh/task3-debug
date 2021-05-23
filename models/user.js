module.exports = function(Sequelize, sequelize) {
    return sequelize.define('user', {
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        username: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })
}