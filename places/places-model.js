import mongoose from "mongoose";
import placesSchema from "./places-schema.js";
const placesModel = mongoose.model('placesModel',placesSchema);
export default placesModel;

