const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

const dayAndTime = () => {
    var currentdate = new Date();
    return [currentdate.getDay(), currentdate.getHours()];
};

app.use((req, res, next) => {
    const verifyDayAndTime = dayAndTime();
    if (verifyDayAndTime[0] === 0 || verifyDayAndTime[0] === 5) {
        res.send("not authorized day");
    } else if (verifyDayAndTime[1] < 9 || verifyDayAndTime[1] > 17) {
        res.send("not authorised hour");
    } else {
        next();
    }
});

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/services", (req, res) => {
    res.render("services");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(3000);
