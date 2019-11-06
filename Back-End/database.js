//======================================Connection=============================================//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Medisafe", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("Mongoose connection failed!");
  console.log("____________________________________________________");
});

db.once("open", function() {
  console.log("Mongoose connection initiated successfully!");
  console.log("____________________________________________________");
});

//========================================User Schema===============================================//
let userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  measurement:[{ bloodSugar: Number, date: Date, status: String}],
  medication:[{ medName : String , date: Date , time: Date}],
  note:[{description: String , date: { type: Date, default: Date.now }
  }]
});

let Users = mongoose.model("users", userSchema);

//=========================================GET=================================================//
let getDate = callBack => {
  console.log("GET Data FROM DATABASE");
  Users.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};


//=====================================MODULE EXPORTS=============================================//
module.exports = {
  getDate,
 
};
