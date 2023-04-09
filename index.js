const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello Deakin SIT323 \n\ this is stevelee');
});

app.listen(port, () => {
    console.log(`running the server`)
})