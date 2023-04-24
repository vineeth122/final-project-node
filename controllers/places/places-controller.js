import * as placesDao from '../../places/places-dao.js';



const findPlaces = async (req,res) => {
    const places = await placesDao.findPlaces()
    res.json(places);
}





export default (app) => {
    app.get('/api/trips/places',findPlaces);

}