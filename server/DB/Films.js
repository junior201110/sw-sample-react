const Db = require("./index");

const getFilmById = filmId => {
    return new Promise((resolve, reject) => {
        Db.get("SELECT * FROM films WHERE epId = ?", [filmId], (err, row) => {
            if (err)
                return reject(err.message);
            resolve(row);
        });
    });
};

const fetchAllFilms = () => {
    return new Promise((resolve, reject) => {
        Db.all("SELECT * FROM films", [], (err, films) => {
            if (err) {
                return reject(err.message)
            }
            resolve(films)
        });
    })
};

const insertFilm = (filmId, isFavorite) => {
    return new Promise((resolve, reject) => {
        Db.run(`INSERT INTO films(epId, isFavorite) VALUES(?, ?)`, [filmId, isFavorite],
            err => {
                if (err) {
                    reject(err.message);
                }
                if (err) return reject(err);
                getFilmById(filmId)
                    .then(resolve)
                    .catch(reject)
            });
    })
};

const updateFilm = (filmId, isFavorite) => {
    return new Promise((resolve, reject) => {
        let data = [isFavorite, filmId];
        let sql = `UPDATE films SET isFavorite = ? WHERE epId = ?`;
        Db.run(sql, data, (err) => {
            if (err) return reject(err);
            getFilmById(filmId)
                .then(resolve)
                .catch(reject)
        });
    });
};


const updateFilmsFavorite = (filmId, isFavorite) => {
    return new Promise((resolve, reject) => {
        getFilmById(filmId)
            .then(film => {
                return film ? updateFilm(filmId, isFavorite) : insertFilm(filmId, isFavorite);
            })
            .then(resolve)
            .catch(reject)
    });
};


module.exports = {
    getFilmById,
    insertFilm,
    updateFilm,
    updateFilmsFavorite,
    fetchAllFilms
};