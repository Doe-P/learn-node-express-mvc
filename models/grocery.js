const db = require('../utill/database');


module.exports = class Grocery {
    constructor(id, items){
        this.id = id;
        this.items = items;
    }



    static fetchAllItems(){
        return db.execute('SELECT * FROM groceries');
    }

    static insertItem(item){
        return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
    }

    static getSingleItem(id){
        return db.execute('SELECT * FROM groceries WHERE id = ?', [id]);
    }

    static uppdateItems(id, item){
        return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
    }

    static deleteItem(id){
        return db.execute('DELETE FROM groceries WHERE id = ?', [id]);
    }
}