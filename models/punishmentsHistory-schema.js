const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true
}

const schema = new mongoose.Schema({
    guildID: reqString,
    userID: reqString,
    staffID: reqString,
    reason: reqString,
    type: reqString
});

module.exports = mongoose.models['punishmentsHistory'] || mongoose.model('punishmentsHistory', schema);