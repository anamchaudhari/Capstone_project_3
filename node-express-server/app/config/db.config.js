module.exports = {
  HOST: "testdb.cjoswsmgox7q.ap-south-1.rds.amazonaws.com",
  USER: "testdb",
  PASSWORD: "Anam7860",
  DB: "testdb",
  dialect: "mysql",
  Port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
