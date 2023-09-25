const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

require("dotenv").config();

const { MONGO_URL, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

if(MONGO_USERNAME != "") {
  mongoose.connect(MONGO_URL, {
    auth: {
        user: MONGO_USERNAME,
        password: MONGO_PASSWORD
    },
    opt: { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  });
}
else {
  mongoose.connect(MONGO_URL, {
    opt: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  });
}

const conSuccess = mongoose.connection;
conSuccess.once("open", (_) => {
  console.log("Database connected:");
});

conSuccess.on("error", (err) => {
  console.error("connection error:", err);
});
