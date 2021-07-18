import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: 'server/.env'
});

import {passport} from "./core/passport";
const app = express();


app.get('/', (req, res) => {
    res.end("<h1>Server runned !!!</h1>");
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/login'
}), (req, res) => {
    res.send();
});




app.listen(3001, () => {
    console.log('Server runned');
})