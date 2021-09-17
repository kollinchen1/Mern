const Player = require("../controllers/Player.controller");

module.exports = (app) => {
    app.get("/api/players", Player.findAll);
    app.get("/api/players/:id", Player.findOne);
    app.post("/api/players", Player.create);
    app.put("/api/players/:id", Player.update);
    app.delete("/api/players/:id", Player.delete);
}