const { app } = require("./server.js");
const { connect } = require("./utils/database");

app.listen(3001, () => {
    connect(); // Ensure to not call the server if it crashes it will waste resources $$$
    console.log("Server running on port 3001");
});




