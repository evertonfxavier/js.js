const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  //   titulo: String,
  titulo: { type: String, require: true },
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

// module.exports = HomeModel;
