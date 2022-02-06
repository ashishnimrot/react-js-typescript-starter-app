const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// add middleware
app.use(express.static("build"));

router.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname.replace("/server", ""), "build", "index.html")
    );
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);