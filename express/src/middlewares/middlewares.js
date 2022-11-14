module.exports = (req, res, next) => {
  console.log();
  console.log("passei no meu middleware");
  console.log();
  
  next();
};
