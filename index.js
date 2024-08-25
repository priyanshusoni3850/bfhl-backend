const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// GET method route
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST method route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Input validation
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input, 'data' should be an array."
        });
    }

    const user_id = "john_doe_17091999"; // Example, should be dynamic
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_lowercase_alphabet = alphabets.filter(char => char === char.toLowerCase())
        .sort().slice(-1);

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
