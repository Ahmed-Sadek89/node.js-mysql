const db = require('../Config/database');

class Grocery {
    constructor( id, item ) {
        this.id = id;
        this.item = item;
    }

    static getAllGroceries() {
        const query = `select * from groceries order by id`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, result) => {
                if(error) {
                    reject(error)
                }
                else {
                    resolve(result)
                }
            }) 
        })
    }

    static insertGrocery(item) {
        const query = `insert into groceries set item='${item}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }  

    static updateGrocery(id, item) {
        const query = `update groceries set item = '${item}' where id=${id}`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    static deleteGrocery(id) {
        const query = `delete from groceries where id=${id}`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}

module.exports = Grocery