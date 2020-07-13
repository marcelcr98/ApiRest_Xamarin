let db = require('../models/db');

let productos = {
  listar( req, res ){
    let sql = "SELECT * FROM contacts";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },


  store( req, res ){
    val_fullid = req.body.id;
    val_fullName = req.body.fullName;
    val_email = req.body.email;
    val_phoneNumber = req.body.phoneNumber;
    let sql = "INSERT INTO contacts(fullName,email,phoneNumber) VALUES(?,?,?)";
    db.query(sql,[val_fullName,val_email,val_phoneNumber],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM contacts WHERE id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;
    val_fullName = req.body.fullName;
    val_email = req.body.email;
    val_phoneNumber = req.body.phoneNumber;
    let sql = "UPDATE contacts SET fullName=?, email=? ,phoneNumber=? WHERE id=?";
    db.query(sql,[val_fullName,val_email,val_phoneNumber],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM contacts WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;