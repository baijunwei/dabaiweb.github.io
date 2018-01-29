const db = require('../common/db');
module.exports = db.defineModel('students', {
    id: {
        type: db.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:db.STRING(255),
    password:db.STRING(255),
    age:db.STRING(20),
    salary:db.STRING(8)
});