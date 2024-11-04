const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sumit Rodrigues SRODZ",
            age: 24,
        },
        {
            id: 2,
            name: "Sam Sulek 200lbs",
            age: 29,
        },
        {
            id: 3,
            name: "Astel Bazinski babu",
            age: 18,
        },
        {
            id: 4,
            name: "Blair Witch",
            age: 21,
        }
    ])
});
app.listen(5500, ()=>{
    console.log("app is running on 5500 port")
})