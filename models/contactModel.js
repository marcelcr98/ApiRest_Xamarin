var db = require("./db");

let model = {
    getProducts: (cb) => {
        return db.query("SELECT * FROM contacts", cb)
    },
    getProduct: (id, cb) => {
        return db.query("SELECT * FROM contacts WHERE id=?", [id], cb)
    },
    addProduct: (input, cb) => {


        let data = {
            fullName: input.fullName,
            email: input.email,
            phoneNumber: input.phoneNumber
        }
        return db.query("INSERT INTO contacts SET ?", [data], cb)
    },
    updateProduct: (input, cb) => {
        let data = {
            id: input.id,
            fullName: input.fullName,
            email: input.email,
            phoneNumber: input.phoneNumber
        }
        return db.query("UPDATE contacts SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteProduct: (id, cb) => {
        return db.query("DELETE FROM contacts WHERE id=?", [id], cb);
    }
}

module.exports = model;