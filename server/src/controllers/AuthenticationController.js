const {User} = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user){
    const ONE_WEEK = 604800;
    return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: ONE_WEEK});

}


module.exports = {
    async register(req, res) {
        try {
            
            const user = await User.create(req.body);
            const userJSON = user.toJSON();
            return res.send({user: userJSON, token: jwtSignUser(userJSON)});
        } catch (err) {
            res.status(400).send({
                error: "This email account is already in use." + err
            });

        }
    },
    async login(req, res) {
        try {
            const {
                email,
                password
            } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                return res.status(403).send({
                    error: "Invalid login information"
                });
            }
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "Invalid login information"
                });
            }
            const userJSON = user.toJSON();
            return res.send({user: userJSON, token: jwtSignUser(userJSON)});
        } catch (err) {
            return res.status(500).send({
                error: "An error has occured"
            });


        }

    }
};