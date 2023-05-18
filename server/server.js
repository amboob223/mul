const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");
const path = require("path");

//middleware

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });
app.set("view engine", "ejs");


//
app.post("/moo", upload.single("image"), async (req, res) => {
    try {
        const { name } = req.body
        const { filename } = req.file // responds with the 

        const newData = await pool.query(
            "INSERT INTO ju(name,filename) VALUES($1,$2) RETURNING *",
            [name, filename]
        );

        res.json(newData.rows[0]) // then we send the json to the browser
        console.log("work")
    } catch (error) {
        console.log(error)
        // res.status(500).send("server probs")

    }
});

app.listen("5000", () => {
    console.log("yo")
})