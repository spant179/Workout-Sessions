const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000 ;
const app = express();
const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.s22dh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
require("./routes/html_routes.js")(app);
require("./routes/api_routes.js")(app);

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});
