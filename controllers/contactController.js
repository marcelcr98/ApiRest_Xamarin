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
    val_name = req.body.name;
    val_lastname = req.body.lastname;
    val_gender = req.body.gender;
    val_birth = req.body.birth;
    let sql = "INSERT INTO contacts(name,lastname,gender,birth) VALUES(?,?,?,?)";
    db.query(sql,[val_name,val_lastname,val_gender,val_birth],function(err, newData){
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
    val_name = req.body.name;
    val_lastname = req.body.lastname;
    val_gender = req.body.gender;
    val_birth = req.body.birth;
    let sql = "UPDATE contacts SET name=?, lastname=? ,gender=? ,birth=? WHERE id=?";
    db.query(sql,[val_name,val_lastname,val_gender,val_birth],function(err, newData){
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