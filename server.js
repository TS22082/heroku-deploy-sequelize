const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./views"));

const apiRoutes = require("./controllers/api-routes");
app.use("/api", apiRoutes);

const clientRoutes = require("./controllers/client-routes");
app.use("/", clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });
});
