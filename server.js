// testing node.js connection with MongoDB
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://MyYoutubeVideo:MyYoutubeVideoPassword@youtubevideocluster.iqcvkvl.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});