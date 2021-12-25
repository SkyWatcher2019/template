const { Client } = require('discord.js');
const mongoose = require('mongoose');
require('dotenv/config');

const client = new Client({ intents: 14335 });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('database connected'));
client.login(process.env.TOKEN).then(() => console.log('logged'));



/* database usage example

// import db schema
const whitelistSchema = require('/models/whitelist-schema');

// find user in whitelist db
const user = await whitelistSchema.findOne({ id: 'variable with user id' });

//store user in whitelist db
await whitelistSchema.create({
    id: 'variable',
    name: 'variable',
    nickname: 'variable',
    age: 'variable',
    from: 'variable',
    plans: 'variable'
});

*/