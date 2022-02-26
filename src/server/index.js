var path = require('path')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
    /* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

//const fetch = require('node-fetch')
//from https://stackoverflow.com/questions/69055506/how-to-fix-must-use-import-to-load-es-module-discord-js
const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

app.post('/postData', function(req, res) {
    const Article = req.body.url;
    const getAnalysisResult = async() => {
        const result = await fetch(baseURL + process.env.API_KEY + "&url=" + Article + "&lang=en")
        try {
            const data = await result.json();
            console.log(data);
            res.send(data);
        } catch (error) {
            console.log("error occured ===> ", error);
        }
    }
    getAnalysisResult();
})