
//const app = require('express')();   //function represents API were building

/*Refactor code to make a var for express */
const express = require('express');
const app = express();

app.use( express.json() )    /* Middleware converts body => json */

const PORT = 8080;


/* Callback function as second arg, run this function when route requested */
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👚',
        size: 'small'
    })    //Send status to client
});

/* Dynamic URL parameter : represents the ID of the tshirt */
/* Doesnt work as we need middleware, body needs to be parsed => json */
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({
            message: "We need a logo!"
        })
    }
    res.send({
        tshirt: `👚 with your logo ${logo} and ID of ${id}`
    })
});

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)  //backticks instead of quotes for ${PORT}
)

