import mongoose from "mongoose";

const pschema = mongoose.Schema({
    city: String,
    image: String,
}, {collection: 'nplaces'});


export default pschema;