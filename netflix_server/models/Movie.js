const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgThumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    ageLimit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default:false }
}, { timestamps: true });

module.exports = mongoose.export("Movie", MovieSchema);