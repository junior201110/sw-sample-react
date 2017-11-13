import axios from "axios";

export default class SWRequest {
    static fetchAll() {
        return axios.get('/films')
    }

    static setAsFavorite(ep) {
        return axios.post('/film', ep)
    }
}