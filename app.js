// handle routing logic (backend)

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   return res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});