import React from "react";
const bcrypt = require("bcryptjs")

class User {


    constructor(userId) {
        this.userId = userId;
        console.log( "Created User with id:" + this.userId)
    }

    async setPasswordHash(inPassword) {
        const salt = await bcrypt.genSalt(6)
        this.hashedPassword = await bcrypt.hash(inPassword)
    }

    async comparePassword(password) {
        return( await bcrypt.compare(password, this.hashedPassword))
    }

    async setEmail(inEmail) {
        this.email = inEmail
    }

    async getEmail() {
        return this.email
    }
}

export default User;