const AuthenticationController = require ("./controllers/AuthenticationController");
const AuthControllerPolicy = require("./policies/AuthenticationControllerPolicies");
const SongsController = require("./controllers/SongsController");







module.exports = (app) => {
    app.post("/register", AuthControllerPolicy.register, AuthenticationController.register);
    app.post("/login", AuthenticationController.login);
    app.get("/songs", SongsController.index);
    app.post("/songs", SongsController.post);
};