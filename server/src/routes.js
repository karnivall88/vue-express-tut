const AuthenticationController = require ("./controllers/AuthenticationController");
const AuthControllerPolicy = require("./policies/AuthenticationControllerPolicies");







module.exports = (app) => {
    app.post("/register", AuthControllerPolicy.register, AuthenticationController.register);
};