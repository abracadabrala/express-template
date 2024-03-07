export const MYSQL = {
  /**dev */
  devConf: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "111111",
      database: "performance_schema",
    },
  },

  /**pro */
  proConf: {
    client: "mysql2",
    connection: {
      host: "",
      port: "",
      user: "",
      password: "",
      database: "",
    },
  },
};
