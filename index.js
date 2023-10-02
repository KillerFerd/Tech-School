const express = require('express');
const routes = require('./routes/index.routes');
const PORT = 3002;
const db = require('./db/models/index')
const app = express();

app.use(express.json());
app.use('/tech-school', routes);

db.sequelize.sync({force: true}).then(() =>{
    app.listen(PORT, () =>{
        console.log(`Server running in port ${PORT}`);
    });
});