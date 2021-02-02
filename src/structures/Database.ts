import * as Database from "mysql2";
import * as config from "../utils/config";

export const connection: any = Database.createConnection({
    host: config.secrets.mysqlhost,
    user: config.secrets.mysqluser,
    database: config.secrets.mysqldb,
    password: config.secrets.mysqlpw,
    // socketPath: "/var/run/mysqld/mysqld.sock",
    debug: false
});