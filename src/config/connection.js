const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "", {
  host: "localhost",
  dialect: "mariadb"
});

module.exports = sequelize;

// const test = async function() {
//   let sql = `SELECT * FROM tasks`
//   return await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT })
//   .then((row) => {
//     if(row && row[0]) {
//       return row[0]
//     } else {
//       return false
//     }
//   })
// }

// const start = async function() {
//   const result = await test();

//   console.log(result);
// }
