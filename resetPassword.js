const mongoose = require("mongoose");
const User = require("./models/user.js");

async function resetPassword() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

    const user = await User.findOne({ username: "alpha-student" });

    if (!user) {
        console.log("User not found");
        return;
    }

    await user.setPassword("NewPassword123");
    await user.save();

    console.log("Password reset successfully!");

    await mongoose.connection.close();
}

resetPassword();