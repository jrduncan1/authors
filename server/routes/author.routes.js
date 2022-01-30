const Author = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authorz", Author.retrieveAllAuthors)
    app.post("/api/authorz", Author.createAuthor)
    app.get("/api/authorz/:id", Author.retrieveOneAuthor)
    app.put("/api/authorz/:id", Author.updateAuthor)
    app.delete("/api/authorz/:id", Author.deleteAuthor)
}