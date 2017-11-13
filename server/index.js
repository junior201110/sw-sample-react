const Express = require("express");
const axios = require("axios");
const settings = require("./settings");
const fs = require("fs");
const path = require("path");
const Films = require('./DB/Films');
const bodyParser = require("body-parser");
const swMirror = new Express();


// parse application/x-www-form-urlencoded
swMirror.use(bodyParser.urlencoded({extended: false}));

// parse application/json
swMirror.use(bodyParser.json());

swMirror.use('/public', Express.static(path.join(__dirname, '..', 'public')));

swMirror.get('/', (req, res) => {
    res.header('content-type', 'text/html');
    res.send(fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html')));
});

swMirror.post('/film', async (req, res) => {
    try {
        const data = req.body;
        const film = await Films.updateFilmsFavorite(data.epId, data.isFavorite);
        res.send(film);
    } catch (e) {
        res.status(500).send({
            message: e.message
        })
    }
});

swMirror.get('/films', async (req, res) => {
    try {
        const result = await axios.get(settings.films);
        let data = result.data;
        data = await Promise.all(data.results.map(async ep => {
            let film = await Films.getFilmById(Number(ep.episode_id));
            film = film || {isFavorite: 0};
            return Promise.resolve(Object.assign({}, ep, {isFavorite: film.isFavorite === 1}));
        }));
        res.status(200).send(data.sort((a, b) => a.episode_id < b.episode_id ? -1 : 1));
    } catch (e) {
        res.status(500).send(e.message)
    }
});


swMirror.listen(settings.port, settings.host, () =>
    console.log("SW MIRROR LISTEM ON " + settings.host + ":" + settings.port)
);