const db = require('../common/db');
module.exports = db.defineModel('users', {
    id: {
        type: db.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:db.STRING(255),
    password:db.STRING(255),
});