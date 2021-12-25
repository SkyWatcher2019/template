const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true,
};
const schema = new mongoose.Schema({
    id: reqString,
    name: reqString,
    nickname: reqString,
    age: reqString,
    from: reqString,
    plans: reqString
});

module.exports = mongoose.models['whitelist'] || mongoose.model('whitelist', schema);