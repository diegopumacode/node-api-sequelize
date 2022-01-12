const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const corsOptions = { origin: "*" }

app.use(cors(corsOptions))

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "API NODE 1.0 /`-_-/`" });
});

require("./app/routes/customer.routes.js")(app);
db.sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});