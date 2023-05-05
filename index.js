const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
setImmediate(() => {
  console.log('called')
})

app.use('/api/colors', require('./routes/api/colors'));

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(3000, () => {
    console.log('server started in port 3000');
})
