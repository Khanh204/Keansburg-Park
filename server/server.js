const express = require('express');
const cors = require('cors');
const { login, authenticateToken } = require('./auth');

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.post('/login', login);
app.get('/admin', authenticateToken, (req, res) => {
    res.send('Welcome to the admin page');
});
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
