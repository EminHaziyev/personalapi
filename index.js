require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
let currentTabName = null;
let currentTabIcon = null;


app.post("/setactivity", async (req, res) => {
    const { tabName, tabIcon, password } = req.body;
    if (password == process.env.PASS) {
        currentTabName = tabName;
        currentTabIcon = tabIcon;
        res.send("Success")
    }
   

})

app.get("/getactivity", (req,res)=>{
    const data = {
        tabN: currentTabName,
        tabI: currentTabIcon
    }
    res.json(data);
})

app.listen("3000", () => {
    console.log("3000")
})