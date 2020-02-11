module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/ttrpgdb",
  secretOrKey: process.env.SECRET_KEY
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI);
