'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/*', (req, res) => {
    res.send('Services Stack with CI/CD!  '+req.path+'\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);