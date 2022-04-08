import mysql, {Connection} from "mysql";

export class database {
    private connection: Connection;
    private static instance: database;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.MYSQLHOST || 'localhost',
            user: process.env.MYSQLUSER || 'root',
            password: process.env.MYSQLPW || 'root',
            database: process.env.MYSQLDB || 'mysql',
        });
    }
    static _getInstance(){
        if(!database.instance){
            this.instance = new database();
        }
        return database.instance;
    }
    public _getConnection(){
        return this.connection;
    }
}