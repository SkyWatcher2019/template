const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true,
};
const schema = new mongoose.Schema({
    userID: reqString,
    guildID: reqString,
    staffID: reqString,
    reason: reqString,
    expires: Date,
    type: {
        type: String,
        required: true,
        enum: ['ban', 'mute'],
    },
}, { timestamps: true });

module.exports = mongoose.models['punishment'] || mongoose.model('punishment', schema);