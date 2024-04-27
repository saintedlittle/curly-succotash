const gamesRouter = require("express").Router();
const {
    sendAllGames,
    deleteGame,
    addGameController,
} = require("../controllers/games");
const { getAllGames } = require("../middlewars/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;