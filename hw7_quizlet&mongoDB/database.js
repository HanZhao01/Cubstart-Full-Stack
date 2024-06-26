// QUESTION 1. Import mongoose
const mongoose = require("mongoose");

// QUESTION 2. Paste your connection string from MongoDB Atlas here, with the correct username and password.
//
// Don't forget the quotation marks, and do not include the triangle brackets <> around your password.
// It should look something like this: "mongodb+srv://ddoski:my_password@cluster#.xxxxxxx.mongodb.net/"
//
// Note: See connectToDB() below, which uses this variable and calls mongoose.connect(...)
const dbConnectionUri = 'mongodb+srv://zihanzhao1117:Any8XVviiJzZEh9A@cluster0.ftgatsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = "quizlet-ish";

// QUESTION 3. Create a new mongoose.Schema with two String properties: "front" and "back".
const flashcardSchema = new mongoose.Schema({
    front: String,
    back: String
});

// QUESTION 4. Create a mongoose.model with the schema you just created.
// Note: The first parameter should match the model name (capitalized, not plural, i.e. "Flashcard"),
//       as mongoose automatically converts it to a plural collection name (i.e. "Flashcard" -> "flashcards")
const Flashcard = mongoose.model("Flashcards", flashcardSchema);

// Connects to database with the connection string and database name specified above
async function connectToDB() {
    await mongoose.connect(dbConnectionUri, { dbName });
    console.log("Successfully connected to MongoDB");
}

// Exports the connect function and the Flashcard model to use in `server.js`
module.exports = { connectToDB, Flashcard };
