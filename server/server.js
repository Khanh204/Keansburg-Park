import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3333;
const salt = 10;
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'keansburgpark'
});

app.post("/register", (req, res) => {
    const sql = "INSERT INTO users (`username`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Erros for hashing password"});
        const values = [
            req.body.username,
            hash
        ]
        db.query(sql, [values], (err, result) =>{
            if(err) return res.json({Error: "Inserting data error in server"});
            return res.json({Status: "Success"});
        })
    })
});

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, [req.body.username], (err, data) => {
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Login error in server"});
                if(response){
                    const name = data[0].username;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"});
                }else{
                    return res.json({Error: "Password not matched"});
                }
            })
        }else {
            return res.json({Error: "No user existed"});
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
