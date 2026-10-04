const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Auth endpoints
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password required' });
    }
    return res.json({ success: true, message: 'Successfully logged in!', user: { username } });
});

app.post('/api/auth/signup', (req, res) => {
    const { fullName, email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    return res.json({ success: true, message: 'Account created successfully!', user: { fullName, email } });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'AutoML Studio API' });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
